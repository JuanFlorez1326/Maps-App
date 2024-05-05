import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string,
  marker: Marker
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  public currentLngLat: LngLat = new LngLat(-75.7, 4.5);
  public allMarkers: MarkerAndColor[] = [];
  public zoomLevel: number = 13;
  public map?: Map;

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    this.renderMap();
  }
    
  ngOnDestroy(): void {
    this.map?.remove();
  }

  public renderMap() {
    if (this.divMap) {
      this.map = new Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.currentLngLat,
        zoom: this.zoomLevel
      });
    }
  }

  public createMarker() {
    if(!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker( lngLat, color);
  }

  public addMarker( lngLat: LngLat, color: string) {
    if(!this.map) return;
    const marker = new Marker({ color, draggable: true }).setLngLat(lngLat).addTo(this.map);
    this.allMarkers.push({ marker, color });
  }

  public deleteMarker( index: number ) {
    this.allMarkers[index].marker.remove();
    this.allMarkers.splice(index, 1);
  }
}
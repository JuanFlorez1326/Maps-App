import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  public currentLngLat: LngLat = new LngLat(-75.7, 4.5);
  public zoomLevel: number = 10;
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
    this.mapListener();
  }

  public mapListener() {
    if(!this.map) throw 'Uninitialized Map';

    this.map.on('zoom', (event) => {
      this.zoomLevel = this.map!.getZoom();
    });

    this.map.on('zoomend', (event) => {
      if(this.map!.getZoom() < 18) return;
      this.map?.zoomTo(18);
    });

    this.map.on('move', (event) => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  public zoomIn(){
    this.map?.zoomIn();
  }

  public zoomOut() {
    this.map?.zoomOut();
  }

  public zoomChange( value: string ) {
    this.zoomLevel = Number(value);
    this.map?.zoomTo(this.zoomLevel);
  }
}
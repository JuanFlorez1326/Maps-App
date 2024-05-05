import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {
  
  @ViewChild('map') divMap?: ElementRef;
  @Input() lngLat?: [number, number];

  ngAfterViewInit(): void {
    this.renderMap();
  }

  public renderMap() {
    if( !this.divMap?.nativeElement) throw 'Map Not Found'
    if ( !this.lngLat ) throw "LngLat can't null";

    if (this.divMap) {
      const map = new Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.lngLat,
        interactive: false,
        zoom: 15
      });

      new Marker().setLngLat(this.lngLat).addTo(map)
    }
  }
}
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    this.renderMap();
  }

  public renderMap() {
    if (this.divMap) {
      const map = new Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-75.7, 4.5],
        zoom: 9
      });
    }
  }
}
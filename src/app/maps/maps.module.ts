import * as mapboxgl from 'mapbox-gl';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';

import { SideMenuAloneComponent } from '../alone/components/side-menu/side-menu.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';

(mapboxgl as any).accessToken = 'pk.eyJ1IjoianVhbmZsb3JlejEzMjYiLCJhIjoiY2x2bzI3Y2xyMGx0YTJzbDlnaHgwdGZ2eiJ9.RoeX1z-5ETD5Im-IndipAQ';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'full-screen',
        component: FullScreenPageComponent
      },
      {
        path: 'zoom-range',
        component: ZoomRangePageComponent
      },
      {
        path: 'markers',
        component: MarkersPageComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: '**',
        redirectTo: 'full-screen'
      }
    ]
  }
];

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    SideMenuAloneComponent,
    RouterModule.forChild(routes)
  ]
})
export class MapsModule {}
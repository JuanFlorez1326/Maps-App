import { Component } from '@angular/core';

interface MenuItem {
  name : string,
  route: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {
      route: '/maps/full-screen',
      name: 'full screen'
    },
    {
      route: '/maps/zoom-range',
      name: 'zoom range'
    },
    {
      route: '/maps/markers',
      name: 'markers'
    },
    {
      route: '/maps/properties',
      name: 'properties'
    },
  ]
}
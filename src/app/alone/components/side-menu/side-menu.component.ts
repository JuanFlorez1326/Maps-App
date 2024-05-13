import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name : string,
  route: string
}

@Component({
  standalone: true,
  selector: 'app-side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuAloneComponent {

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
    {
      route: '/alone',
      name: 'Standalone'
    }
  ]
}
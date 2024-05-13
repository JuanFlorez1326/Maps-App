import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuAloneComponent } from '../../components/side-menu/side-menu.component';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  standalone: true,
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
  imports: [ 
    CommonModule, 
    CounterAloneComponent, 
    SideMenuAloneComponent 
  ]
})
export class AlonePageComponent {}
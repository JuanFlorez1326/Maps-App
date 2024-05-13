import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter-alone',
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent {
  @Input() public counter!: number;
}
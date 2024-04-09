import { Component } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  name = 'Angular'; // Data for Interpolation
  message = 'This is a dynamic message!'; // Data for Property Binding
}

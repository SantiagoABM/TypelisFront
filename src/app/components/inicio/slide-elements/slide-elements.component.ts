import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-elements',
  templateUrl: './slide-elements.component.html',
  styleUrls: ['./slide-elements.component.css']
})
export class SlideElementsComponent {
  @Input() pelicula: any;
  
}

import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-slide-actores',
  templateUrl: './slide-actores.component.html',
  styleUrls: ['./slide-actores.component.scss']
})
export class SlideActoresComponent {
  @Input() pelicula: Pelicula;

}

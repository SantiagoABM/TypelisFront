import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent {
  @Input() pelicula: Pelicula;
}

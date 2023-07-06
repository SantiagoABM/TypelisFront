import { Component, Input } from '@angular/core';
import { Actores } from 'src/app/interfaces/pelicula.interface';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.css']
})
export class CardActorComponent {
  @Input() actor: Actores
}

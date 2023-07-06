import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Actores } from 'src/app/interfaces/pelicula.interface';
import { ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent {
  actores: Actores[]
  page: number = 0;
  search: string 
  constructor(public actorService: ActoresService) { }
  ngOnInit(): void {
    this.actorService.getActores()
    .pipe(
      map(actores => actores
        .map(actor => (
          { 
            id: actor._id,
            name: actor.name,
            descripcion: actor.descripcion,
            age: actor.age,
            ciudad: actor.ciudad,
            lenguaje: actor.lenguaje,
            imgURL: actor.imgURL,
          })))
    ).subscribe(
      res => {
        this.actores = res;
        console.log(this.actores);
      },
      err => console.log(err)
    )
  }

  nextPage() {
    this.page += 5
  }
  prevPage(): void {
    if (this.page > 0)
      this.page -= 5
  }
  onSearchActores(search: string) {
    this.page = 0
    this.search = search
  }
}

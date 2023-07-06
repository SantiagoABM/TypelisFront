import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Actores, Genero, Pelicula } from 'src/app/interfaces/pelicula.interface';
import { ActoresService } from 'src/app/services/actores.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.css']
})
export class DetailActorComponent {
  actores: Actores[]
  peliculas: Pelicula[]
  isExpanded = false;
  elenco = true;
  
  actor: any ;

  constructor(private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private actoresService: ActoresService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; // Aquí obtendrás el ID de la URL
      // Luego puedes utilizar el ID para enviar la consulta al servicio correspondiente

      this.obtenerId(id);

    });
    this.peliculasService.getMovies()
    .pipe(
      map(peliculas => peliculas
        .map(pelicula => (
          { 
            id: pelicula._id,
            name: pelicula.name,
            descripcion: pelicula.descripcion,
            year: pelicula.year,
            genero: pelicula.genero,
            actores: pelicula.actores,
            director: pelicula.director,
            imgURL: pelicula.imgURL,
            videoURL: pelicula.videoURL 
          })))
    ).subscribe(
      res => {
        this.peliculas = res;
        console.log(this.peliculas);
      },
      err => console.log(err)
    )
    this.actoresService.getActores()
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
  cambioElenco(){
    this.elenco = true;
  }
  cambioGenero(){
    this.elenco = false;
  }


  obtenerId(id: string){
    this.actoresService.getActorId(id).subscribe(
      res => {
        this.actor = res;
        console.log(res)
      },
      err => console.log(err)
    );
  }
}

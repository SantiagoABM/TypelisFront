import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Actores, Genero, Pelicula } from 'src/app/interfaces/pelicula.interface';
import { ActoresService } from 'src/app/services/actores.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  generos: Genero[]
  peliculas: Pelicula[]
  actores: Actores[]
  page: number = 0;
  search: string 
  constructor(public peliculaService: PeliculasService,
    public generoService: GeneroService,
    public actoresService: ActoresService,
    private router: Router) { }
  ngOnInit(): void {
    this.peliculaService.getMovies()
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
        this.peliculas = res.reverse();
        res.forEach(pelicula => {
          console.log(pelicula.genero);
        });
      },
      err => console.log(err)
    )
    this.generoService.getCategorias().pipe(
      map(generos => generos.map(genero => ({ id: genero._id, name: genero.name })))
    ).subscribe(generos => {
      this.generos = generos;
      console.log(generos);
    });

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

  nextPage() {
    this.page += 5
  }
  prevPage(): void {
    if (this.page > 0)
      this.page -= 5
  }
  onSearchPelicula(search: string) {
    this.page = 0
    this.search = search
  }

  eliminar(_id: string){
    this.peliculaService.deleteMovieId(_id).subscribe(
      (res) => {
        // La película se ha creado correctamente
        console.log('Película Eliminada:', res);
        this.router.navigate(['/admin/peliculas'])
      },
      (err) => {
        // Error al crear la película
        console.error('Error al crear la película:', err);
      }
    );;
  }
}

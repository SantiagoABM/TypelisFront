import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Genero, Pelicula } from 'src/app/interfaces/pelicula.interface';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  peliculas: Pelicula[]
  generos: Genero[]
  generoSeleccionado: string
  search: string
  filtroActivo: boolean = false
  
  constructor(private peliculasService: PeliculasService, 
    private generoService: GeneroService) {

  }
  ngOnInit(): void {
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
          res.forEach(element => {
            console.log(element.genero);
          });
        },
        err => console.log(err)

      )
    this.generoService.getCategorias().pipe(
      map(generos => generos
        .map(genero => ({ id: genero._id, name: genero.name })))
    ).subscribe(generos => {
      this.generos = generos;
      console.log(generos);
    });
  }
  filtrarPeliculas(genero: string) {
    this.generoSeleccionado = genero;
    this.filtroActivo = true
    console.log(this.generoSeleccionado)
  }
  onSearchPelicula(search: string) {
    this.search = search
  }
}

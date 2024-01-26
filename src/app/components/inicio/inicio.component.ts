import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Genero, Pelicula } from 'src/app/interfaces/pelicula.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  favoritos: Pelicula[]
  userId: string
  generos: Genero[]
  peliculas: Pelicula []
  pelicula: Pelicula
  peliculasxlikes: Pelicula[]
  logeoExistoso: boolean = false;
  imageSlider: string[]

  constructor(public authService: AuthService,
    public generoService: GeneroService,
    public peliculaService: PeliculasService) { }

  ngOnInit() {
    this.generoService.getCategorias().pipe(
      map(categorias => categorias.map(categoria => ({ id: categoria._id, name: categoria.name })))
    ).subscribe(generos => {
      this.generos = generos;
      console.log(generos);
    });
  
    this.peliculaService.getMovies()
    .pipe(
      map(peliculas => peliculas
        .map(pelicula => (
          { 
            id: pelicula._id,
            imgURL: pelicula.imgURL
          })))
    ).subscribe(
      res => {
        this.imageSlider = res.slice(-3);
        console.log(this.imageSlider);
      },
      err => console.log(err)
    )

    this.userId = this.authService.getUserId()
    if(this.userId){
      this.peliculaService.getPeliculasFavoritas(this.userId)
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
              videoURL: pelicula.videoURL,
              likes: pelicula.likes
            })))
      ).subscribe(
        res => {
          this.favoritos = res;
          console.log(this.favoritos);
        },
        err => console.log(err)
      )
    }
    

    this.peliculaService.getMoviesMostLike()
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
            videoURL: pelicula.videoURL,
            likes: pelicula.likes
          })))
    ).subscribe(
      res => {
        this.peliculasxlikes = res;
        console.log(this.peliculasxlikes);
      },
      err => console.log(err)
    )

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
        this.peliculas = res;
        console.log(this.peliculas);
      },
      err => console.log(err)
    )
    
  }
  
}

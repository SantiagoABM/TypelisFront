import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  peliculas: Pelicula[];
  favoritos: any = [];
  userId: string;

  constructor(
    private usersService: UsersService,
    private peliculasService: PeliculasService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();

    this.peliculasService.getPeliculasFavoritas(this.userId)
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

}

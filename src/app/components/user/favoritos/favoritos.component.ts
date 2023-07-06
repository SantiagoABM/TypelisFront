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

    this.obtenerUsuario(this.userId).pipe(
      switchMap((favoritos) => {
        this.favoritos = favoritos;
        return this.peliculasService.getMovies();
      }),
      map((peliculas) =>
        peliculas
          .map((pelicula) => ({
            id: pelicula._id,
            name: pelicula.name,
            imgURL: pelicula.imgURL,
          }))
          .filter((pelicula) => this.favoritos.includes(pelicula.id))
      )
    ).subscribe(
      (res) => {
        this.peliculas = res;
        console.log(this.peliculas);
      },
      (err) => console.log(err)
    );
  }

  obtenerUsuario(userId: string) {
    return this.usersService.getUserById(userId).pipe(
      map((res) => res.favoritos)
    );
  }
}

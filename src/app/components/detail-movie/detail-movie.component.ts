import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Actores, Genero, Pelicula } from 'src/app/interfaces/pelicula.interface';
import { ActoresService } from 'src/app/services/actores.service';
import { GeneroService } from 'src/app/services/genero.service';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
  generos: Genero[]
  actores: Actores[]
  peliculas: Pelicula[]
  isExpanded = false;
  elenco = true;
  userId: string
  favoritos: string
  like: true | false
  id: string
  pelicula: any;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    public authService: AuthService,
    private peliculasService: PeliculasService,
    private actoresService: ActoresService,
    private generoService: GeneroService) { }

  ngOnInit() {
    this.userId = this.authService.getUserId()
    this.obtenerUsuario(this.userId)
    this.route.params.subscribe(params => {
      this.id = params['id']; // Aquí obtendrás el ID de la URL
      // Luego puedes utilizar el ID para enviar la consulta al servicio correspondiente

      this.obtenerId(this.id);
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
          },
          err => console.log(err)
        )

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
          console.log(this.peliculas)
        },
        err => console.log(err)
      )
    this.generoService.getCategorias().pipe(
      map(categorias => categorias.map(categoria => ({ id: categoria._id, name: categoria.name })))
    ).subscribe(generos => {
      this.generos = generos;
    });
    this.comprobarGenero(this.pelicula.genero)
  }

  expandParagraph() {
    this.isExpanded = true;
  }
  cambioElenco() {
    this.elenco = true;
  }
  cambioGenero() {
    this.elenco = false;
  }

  obtenerId(id: string) {
    this.peliculasService.getMovieId(id).subscribe(
      res => {
        this.pelicula = res;
      },
      err => console.log(err)
    );
  }
  obtenerUsuario(userId: string) {
    this.usersService.getUserById(userId).subscribe(
      res => {
        this.favoritos = res.favoritos
        console.log(this.favoritos)
      });
  }

  likeMovie(userId, id) {
    this.peliculasService.likePelicula(userId, id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
    this.like = true
  }

  unlikeMovie(userId, id) {
    this.peliculasService.unLikePelicula(userId, id).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
    this.like = false
  }


  // ...

  comprobarGenero(peli: any) {
    while (this.pelicula.genero.length > 0 && peli.genero.includes(this.pelicula.genero[0])) {
      // Realiza alguna acción aquí

      // Elimina el primer valor de pelicula.genero
      this.pelicula.genero.shift();
    }

  }
}
// ...

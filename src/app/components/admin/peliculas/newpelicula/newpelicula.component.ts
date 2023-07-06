import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Actores, Genero, Pelicula } from 'src/app/interfaces/pelicula.interface';
import { ActoresService } from 'src/app/services/actores.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-newpelicula',
  templateUrl: './newpelicula.component.html',
  styleUrls: ['./newpelicula.component.css']
})
export class NewpeliculaComponent {
  actores: any = []
  pelicula: any = {}; // Objeto para almacenar los datos del formulario
  generos: any = []
  constructor( private peliculaService: PeliculasService,
    private generoService: GeneroService,
    private actoresService: ActoresService,
    public router: Router) { }

  ngOnInit() {
    this.generoService.getCategorias().pipe(
      map(categorias => categorias.map(categoria => ({ id: categoria._id, name: categoria.name })))
    ).subscribe(generos => {
      this.generos = generos;
    })
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
  
  submitForm() {
    this.peliculaService.createPelicula(this.pelicula)
    .subscribe(
      (res) => {
        // La película se ha creado correctamente
        console.log('Película creada:', res);
        this.router.navigate(['/admin/peliculas'])
      },
      (err) => {
        // Error al crear la película
        console.error('Error al crear la película:', err);
      }
    );
  }
}

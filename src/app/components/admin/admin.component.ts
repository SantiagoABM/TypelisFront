import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pelicula: any = {}; // Objeto para almacenar los datos del formulario
  generos: any = []
  constructor( private peliculaService: PeliculasService,
    private generoService: GeneroService,
    public router: Router) { }

  ngOnInit() {
    this.generoService.getGeneros()
      .subscribe(
        res => {
          this.generos = res;
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
        this.router.navigate(['/admin'])
      },
      (err) => {
        // Error al crear la película
        console.error('Error al crear la película:', err);
      }
    );
  }
  
}

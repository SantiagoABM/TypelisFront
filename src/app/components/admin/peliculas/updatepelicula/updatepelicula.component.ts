import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ActoresService } from 'src/app/services/actores.service';
import { GeneroService } from 'src/app/services/genero.service';
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-updatepelicula',
  templateUrl: './updatepelicula.component.html',
  styleUrls: ['./updatepelicula.component.css']
})
export class UpdatepeliculaComponent {

  actores: any =[]
  pelicula: any = [] // Objeto para almacenar los datos del formulario
  generos: any = []
  constructor(private peliculaService: PeliculasService,
    private generoService: GeneroService,
    private actoresService: ActoresService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
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
    this.generoService.getGeneros()
    .subscribe(
      res => {
        this.generos = res;
      },
      err => console.log(err)
    );
    this.route.params.subscribe(params => {
      const _id = params['id']; // Aquí obtendrás el ID de la URL
      // Luego puedes utilizar el ID para enviar la consulta al servicio correspondiente
      this.obtenerId(_id);
    });
  }

  updateForm() {
    this.route.params.subscribe(params => {
      const id = params['id']; // Aquí obtendrás el ID de la URL
      // Luego puedes utilizar el ID para enviar la consulta al servicio correspondiente

      this.peliculaService.updateMovieId(id, this.pelicula)
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
    });
  }
  obtenerId(_id: string) {
    this.peliculaService.getMovieId(_id).subscribe(
      res => {
        this.pelicula = res;
        console.log(res)
      },
      err => console.log(err)

    );
  }
}
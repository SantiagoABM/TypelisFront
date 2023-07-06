import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css']
})
export class PlayMovieComponent implements OnInit {

  pelicula: any;
  constructor(private route: ActivatedRoute, private elementRef: ElementRef, private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = this.elementRef.nativeElement.querySelector('#' + fragment);
        if (element) {
          element.scrollIntoView();
        }
      }
    });

    this.route.params.subscribe(params => {
      const _id = params['id']; // Aquí obtendrás el ID de la URL
      // Luego puedes utilizar el ID para enviar la consulta al servicio correspondiente
      this.peliculasService.getMovieId(_id).subscribe(
        res => {
          this.pelicula = res;
          console.log(res)
        },
        err => console.log(err));
      console.log(this.pelicula)
    });
  }

  
}

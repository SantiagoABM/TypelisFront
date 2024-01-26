import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageSlider: any []
  images: string[] = [
    'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:9ba7c787-77f4-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn&legacyStatusCode=true',
    'https://playplex.mtvnimages.com/uri/mgid:arc:content:southpark.intl:684e1508-ecfd-11e0-aca6-0026b9414f30?stage=live&ep=shared.southpark.latam',
    'https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:9ba7cc0a-77f4-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn&legacyStatusCode=true'
  ];
  currentIndex = 0;
  constructor(private peliculaService: PeliculasService,
    private router: Router){}
  ngOnInit() {
    // Configuración del slider
    this.peliculaService.getMovies()
    .pipe(
      map(peliculas => peliculas
        .map(pelicula => (
          { 
            id: pelicula._id,
            name: pelicula.name,
            imgURL: pelicula.imgURL
          })))
    ).subscribe(
      res => {
        this.imageSlider = res.slice(-5).reverse();
        console.log(this.imageSlider);
      },
      err => console.log(err)
    )
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
  }

  redirectTo(id: string){
    console.log(id)
    this.router.navigate(['/detailmovie/'+ id]);
  }
}
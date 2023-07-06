import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Genero } from 'src/app/interfaces/pelicula.interface';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit{
  page: number = 0
  search: string
  generos: Genero[]

  constructor (private generoService: GeneroService) {}
  ngOnInit(): void {
    this.generoService.getCategorias().pipe(
      map(generos => generos
        .map(genero => ({ id: genero._id, name: genero.name })))
    ).subscribe(generos => {
      this.generos = generos;
      console.log(generos);
    });
  }
  nextPage() {
    this.page += 3
  }
  prevPage(): void {
    if (this.page > 0)
      this.page -= 3
  }
  onSearchGenero(search: string) {
    this.page = 0
    this.search = search
  }
}

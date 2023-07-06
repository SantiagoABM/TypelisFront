import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(peliculas: Pelicula[], page: number = 0, search: string = ''): Pelicula[] {

    if (search.length === 0)
      return peliculas.slice(page, page + 5);
    
    const filtrandoPeliculas = peliculas.filter(peli => peli.name.includes(search));
    return filtrandoPeliculas.slice(page, page + 5)
  }

}

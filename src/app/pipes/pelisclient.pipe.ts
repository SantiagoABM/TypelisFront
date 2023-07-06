import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';

@Pipe({
  name: 'pelisclient'
})
export class PelisclientPipe implements PipeTransform {

  transform(peliculas: Pelicula[], search: string = ''): Pelicula[] {

    
    const filtrandoPeliculas = peliculas.filter(peli => peli.name.includes(search));
    return filtrandoPeliculas
  }

}

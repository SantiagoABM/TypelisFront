import { Pipe, PipeTransform } from '@angular/core';
import { Genero } from '../interfaces/pelicula.interface';

@Pipe({
  name: 'filtroGeneros'
})
export class FiltroGenerosPipe implements PipeTransform {

  transform(generos: Genero[], page: number = 0, search: string = ''): Genero[] {

    if (search.length === 0)
      return generos.slice(page, page + 3);
    
    const filtrandoPeliculas = generos.filter(gene => gene.name.includes(search));
    return filtrandoPeliculas.slice(page, page + 3)
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Actores } from '../interfaces/pelicula.interface';

@Pipe({
  name: 'filtroActores'
})
export class FiltroActoresPipe implements PipeTransform {

  transform(actores: Actores[], page: number = 0, search: string = ''): Actores[] {

    if (search.length === 0)
      return actores.slice(page, page + 5);
    
    const filtrandoActores = actores.filter(gene => gene.name.includes(search));
    return filtrandoActores.slice(page, page + 5)
  }

}

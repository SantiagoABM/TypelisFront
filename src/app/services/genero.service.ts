import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../interfaces/pelicula.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  generos = [
    { id: '1', name: 'Accion' },
    //{ id: '2', name: 'Suspenso' },
    { id: '3', name: 'Terror' },
    // { id: '4', name: 'Aventura' },
    { id: '5', name: 'Ficción' },
    // { id: '6', name: 'Animación' },
    { id: '7', name: 'Musical' },
    // { id: '8', name: 'Histórico' },

  ]

  private URL = "https://typelis-deploy-render.onrender.com/api/generos"

  constructor( private http: HttpClient) { }

  getGeneros(){
    return this.http.get<any>(this.URL + '/')
  }

  getCategorias(){
    return this.http.get<any>(this.URL + '/')
  }

  getCategoriaId(id: string){
    return this.generos.find(p => p.id === id)
    // return this.http.get<any>(this.URL + '/' + id);

  }
}

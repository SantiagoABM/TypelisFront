export interface Pelicula {
    id: string;
    name: string;
    director: string;
    actores: string[];
    genero: string[];
    descripcion: string;
    year: number;
    imgURL: string;
    videoURL: string;
    likes: number;
    vistas: number;
  }
  
  export interface Actores {
    id: string;
    name: string;
    descripcion: string;
    age: number;
    ciudad: string;
    lenguaje: string;
    imgURL: string;
    peliculas: string[];
  }
  
  export interface Genero {
    id: string;
    name: string;
  }
  
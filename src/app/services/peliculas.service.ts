import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas = [
    { name: 'Dare Gorillaz', imgURL: 'https://i.vimeocdn.com/video/249662612-d7cdff84474fe29489cae901c24a7fe6cb3da7abee62c377d71b97d3d93bbc21-d', id: '1', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['1', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/uAOR6ib95kQ?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['1', '2', '3', '5'] },
    { name: 'Hey ya Outkast', imgURL: 'https://caracoltv.brightspotcdn.com/dims4/default/0976d1d/2147483647/strip/true/crop/800x515+0+0/resize/800x515!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Ff5%2F4a%2Fafaf69f14e08b7573034318c8b53%2Fhey-ya-outkast.jpg', id: '2', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['1', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/PWgvGjAhvIw?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['7'] },
    { name: 'Bad Habit SteveLacy', imgURL: 'https://i.ytimg.com/vi/VF-FGf_ZZiI/maxresdefault.jpg', id: '3', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['1', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/VF-FGf_ZZiI?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['6'] },
    { name: 'As it was Styles', imgURL: 'https://www.guinnessworldrecords.es/Images/Harry-styles-as-it-was-open-arms_tcm29-698094.jpg', id: '4', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['5', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/H5v3kku4y6Q?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['8'] },
    { name: 'Enemy ImagineDragons', imgURL: 'https://www.billboard.com/wp-content/uploads/2022/03/imagine-dragons-jid-arcane-enemy-music-video-still-2022-billboard-1548.jpg', id: '5', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['5', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/D9G1VOjN_84?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['14'] },
    { name: 'New Gold Gorillaz', imgURL: 'https://images.squarespace-cdn.com/content/v1/5a0dd6831f318dcf5130a0d5/5a8cb89e-6a50-454a-9525-814bda260814/gorillaz+new+gold.jpeg', id: '6', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['5', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/qJa-VFwPpYA?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['1', '2', '3', '5'] },
    { name: 'Las quintillizas la película', imgURL: 'https://larepublica.cronosmedia.glr.pe/original/2021/12/29/61ccab922b767956c8295ad8.jpg', id: '7', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['3', '7'], year: 2023, videoURL: 'https://mega.nz/embed/CgMGCDBB#TI6hDAAdS_vEqIBHdadGmw19F8fZPdrMb1oZgXxOHcY', director: 'dreamworks', likes: 0, vistas: 0, actores: ['9', '10', '11', '12', '13'] },
    { name: 'Ya me hiciste mal Rayos Laser', imgURL: 'https://matisinay.com/wp-content/uploads/2020/01/1920x1080-vtime-2_54-take-2021-01-07-16.44.12-.png', id: '8', descripcion: 'asdjsak ds ddsadjakjdkkjdaksj samdsak dsakdjaskdjakdks dasn dkadsakd mamsd kma dkmamkd skmd', rating: 4.3, genero: ['3', '7'], year: 2023, videoURL: 'https://www.youtube.com/embed/F4i3O7T488I?autoplay=1', director: 'dreamworks', likes: 0, vistas: 0, actores: ['15'] }
  ]

  private URL = "https://typelis-deploy-render.onrender.com/api/peliculas"

  constructor(private http: HttpClient) { }
  //:userId/:peliculaId/like
  likePelicula(userId, peliculaId){
    return this.http.post(this.URL + userId + '/' + peliculaId + '/like', null );
  }
  unLikePelicula(userId, peliculaId){
    return this.http.delete(this.URL + userId + '/' + peliculaId + '/unlike');
  }
  getPeliculas() {
    return this.http.get<any>(this.URL);
  }

  getPeliculaId(id: string) {
    return this.http.get<any>(this.URL + id);
  }

  getPeliculasFavoritas(userId: string){
      return this.http.get<any>(this.URL + userId + "/misfavoritos"); 
  }

  createPelicula(pelicula) {
    return this.http.post(this.URL , pelicula);
  }

  getMovies() {
    // return this.peliculas
    return this.http.get<any>(this.URL);

  }
  getMovieId(peliculaId: string) {
    // return this.peliculas.find(p => p.id === id)
    return this.http.get<any>(this.URL + peliculaId);

  }

  getMoviesMostLike(){
    return this.http.get<any>(this.URL + 'peliculalikes')
  }

  deleteMovieId(peliculaId: string) {
    return this.http.delete(this.URL + peliculaId)
  }

  updateMovieId(peliculaId: string, pelicula){
    return this.http.put<any>(this.URL + peliculaId, pelicula)
  }
}
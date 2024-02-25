import { Injectable } from '@angular/core';
import { Actores } from '../interfaces/pelicula.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  actores = [
    { id: '1', name: 'Murdoc', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'Los Ángeles', lenguaje: 'Inglés', imgURL: 'https://gorillazforbeginners.files.wordpress.com/2022/05/murdoc-phase-7.jpg', peliculas: ['1', '6'] },
    { id: '2', name: '2-D', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'Los Ángeles', lenguaje: 'Inglés', imgURL: 'https://cdnb.artstation.com/p/assets/images/images/034/520/245/large/zoe-cornwell-feel-good-inc.jpg?1612501812', peliculas: ['1', '6'] },
    { id: '3', name: 'Russel', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'New York', lenguaje: 'Inglés', imgURL: 'https://assets.mycast.io/actor_images/actor-russel-hobbs-510182_large.jpeg?1660172132', peliculas: ['1', '6'] },
    { id: '5', name: 'Noodle', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'Japón', lenguaje: 'Japones', imgURL: 'https://cdnb.artstation.com/p/assets/images/images/038/212/077/large/edward-munn-edm-asset.jpg?1622487064', peliculas: ['1', '6'] },
    { id: '6', name: 'Steve Lacy', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'New York', lenguaje: 'Inglés', imgURL: 'https://cdn.theatlantic.com/thumbor/a8otXT2zX61U8f-qe_BGkCDc2ho=/1050x0:3750x2700/1080x1080/media/img/mt/2022/08/Steve_Lacy/original.jpg', peliculas: ['3'] },
    { id: '7', name: 'Outkast', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'New York', lenguaje: 'Inglés', imgURL: 'https://i.guim.co.uk/img/media/80c9d0e44610c160bfc9065f28f6b26af4356cd1/0_294_2366_1419/master/2366.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ef45ef8945ba7179e02c681a726534a5', peliculas: ['2'] },
    { id: '8', name: 'Harry Styles', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 24, ciudad: 'New York', lenguaje: 'Inglés', imgURL: 'https://media.admagazine.com/photos/638503a6e63c8afac40e7b40/4:3/w_2867,h_2150,c_limit/harry%20styles.jpg', peliculas: ['4'] },
    { id: '9', name: 'Miku Nakano', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 17, ciudad: 'Japón', lenguaje: 'Japones', imgURL: 'https://pm1.aminoapps.com/7891/813b9e05329516f5101e08c75dacae477d2dbda4r1-720-720v2_uhq.jpg', peliculas: ['7'] },
    { id: '10', name: 'Ichika Nakano', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 17, ciudad: 'Japón', lenguaje: 'Japones', imgURL: 'https://a-static.besthdwallpaper.com/ichika-nakano-the-quintessential-quintuplets-wallpaper-2048x1536-86470_26.jpg', peliculas: ['7'] },
    { id: '11', name: 'Yotsuba Nakano', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 17, ciudad: 'Japón', lenguaje: 'Japones', imgURL: 'https://i.redd.it/kbktyzz4z1d41.jpg', peliculas: ['7'] },
    { id: '12', name: 'Itsuki Nakano', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 17, ciudad: 'Japón', lenguaje: 'Japones', imgURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/216ba6ab-7aba-4582-97f5-908591cb0d87/deadhv7-7a2400bf-0867-4758-bf01-5efb12dada13.jpg/v1/fill/w_600,h_848,q_75,strp/itsuki_nakano_by_lunaticjoker_deadhv7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ4IiwicGF0aCI6IlwvZlwvMjE2YmE2YWItN2FiYS00NTgyLTk3ZjUtOTA4NTkxY2IwZDg3XC9kZWFkaHY3LTdhMjQwMGJmLTA4NjctNDc1OC1iZjAxLTVlZmIxMmRhZGExMy5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.yxAs4ud3G2FNSHqJsMZCrpKzZs3kdNWHjw-mBeB1XUQ', peliculas: ['7'] },
    { id: '13', name: 'Nino Nakano', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 17, ciudad: 'Japón', lenguaje: 'Japones', imgURL: 'https://i1.sndcdn.com/artworks-000615641080-31cgs8-t500x500.jpg', peliculas: ['7'] },
    { id: '14', name: 'Imagine Dragons', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 34, ciudad: 'New York', lenguaje: 'Inglés', imgURL: 'https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e', peliculas: ['5'] },
    { id: '15', name: 'Rayos Laser', descripcion: 'ssda ndos dsad jasdo iasjdkas djalkdsal daslkd asdksa dasjd', age: 28, ciudad: 'España', lenguaje: 'Español', imgURL: 'https://polifoniaok.files.wordpress.com/2020/09/rayos1.jpg?w=1568', peliculas: ['8'] },
  ]
  //private URL = "https://localhost:3400/api/actores/"

  private URL = "https://typelis-deploy-render.onrender.com/api/actores/"

  constructor(private http: HttpClient) { }

  createActor(actor){
    return this.http.post<any>(this.URL, actor)
  }
  getActores() {
    return this.http.get<any>(this.URL)
    //return this.http.get<any>(this.URL);
  }
  getActorId(actorId: string) {
    //return this.actores.find(p => p.id === actorId)
    return this.http.get<any>(this.URL+ actorId);
  }
  

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { Page404Component } from './components/page404/page404.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { ActoresComponent } from './components/admin/actores/actores.component';
import { PeliculasComponent } from './components/admin/peliculas/peliculas.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { GenerosComponent } from './components/admin/generos/generos.component';
import { UpdatepeliculaComponent } from './components/admin/peliculas/updatepelicula/updatepelicula.component';
import { NewpeliculaComponent } from './components/admin/peliculas/newpelicula/newpelicula.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { NewactorComponent } from './components/admin/actores/newactor/newactor.component';
import { UpdateactorComponent } from './components/admin/actores/updateactor/updateactor.component';
import { FavoritosComponent } from './components/user/favoritos/favoritos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'signin',
    component: SigninComponent
  }, {
    path: 'detailmovie/:id',
    component: DetailMovieComponent
  }, {
    path: 'detailactor/:id',
    component: DetailActorComponent
  }, {
    path: 'playmovie/:id',
    component: PlayMovieComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'inicio',
    component: InicioComponent
  }, {
    path: 'peliculas',
    component: SearchMovieComponent
  }, {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/peliculas',
    component: PeliculasComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/peliculas/update/:id',
    component: UpdatepeliculaComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/peliculas/new',
    component: NewpeliculaComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/generos',
    component: GenerosComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/actores',
    component: ActoresComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/actores/new',
    component: NewactorComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  }, {
    path: 'admin/actores/update/:id',
    component: UpdateactorComponent,
    canActivate: [AuthGuard, IsAdminGuard]
  },
  
  {
    path: 'user/favoritos',
    component: FavoritosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

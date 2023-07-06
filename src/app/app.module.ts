import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideElementsComponent } from './components/inicio/slide-elements/slide-elements.component';
import { SliderComponent } from './components/inicio/slider/slider.component';
import { SlideActoresComponent } from './components/inicio/slide-actores/slide-actores.component';
import { RoleDirective } from './directives/role.directive';
import { IsAdminGuard } from './guards/is-admin.guard';
import { LogoComponent } from './logo/logo.component';
import { AdminComponent } from './components/admin/admin.component';
import { SafePipe } from './safe.pipe';
import { Page404Component } from './components/page404/page404.component';
import { PeliculasComponent } from './components/admin/peliculas/peliculas.component';
import { UpdatepeliculaComponent } from './components/admin/peliculas/updatepelicula/updatepelicula.component';
import { NewpeliculaComponent } from './components/admin/peliculas/newpelicula/newpelicula.component';
import { GenerosComponent } from './components/admin/generos/generos.component';
import { UpdategeneroComponent } from './components/admin/generos/updategenero/updategenero.component';
import { NewgeneroComponent } from './components/admin/generos/newgenero/newgenero.component';
import { UsuariosComponent } from './components/admin/usuarios/usuarios.component';
import { UpdateusuarioComponent } from './components/admin/usuarios/updateusuario/updateusuario.component';
import { NewusuarioComponent } from './components/admin/usuarios/newusuario/newusuario.component';
import { ActoresComponent } from './components/admin/actores/actores.component';
import { UpdateactorComponent } from './components/admin/actores/updateactor/updateactor.component';
import { NewactorComponent } from './components/admin/actores/newactor/newactor.component';
import { CardPeliculaComponent } from './components/inicio/card-pelicula/card-pelicula.component';
import { NavlateralComponent } from './components/admin/navbarlat/navbarlat.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PelisclientPipe } from './pipes/pelisclient.pipe';
import { FiltroGenerosPipe } from './pipes/filtro-generos.pipe';
import { CardActorComponent } from './components/inicio/card-actor/card-actor.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { FiltroActoresPipe } from './pipes/filtro-actores.pipe';
import { FavoritosComponent } from './components/user/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    DetailMovieComponent,
    PlayMovieComponent,
    InicioComponent,
    FooterComponent,
    SlideElementsComponent,
    SliderComponent,
    SlideActoresComponent,
    RoleDirective,
    LogoComponent,
    AdminComponent,
    SafePipe,
    Page404Component,
    PeliculasComponent,
    UpdatepeliculaComponent,
    NewpeliculaComponent,
    GenerosComponent,
    UpdategeneroComponent,
    NewgeneroComponent,
    UsuariosComponent,
    UpdateusuarioComponent,
    NewusuarioComponent,
    ActoresComponent,
    UpdateactorComponent,
    NewactorComponent,
    CardPeliculaComponent,
    NavlateralComponent,
    SearchMovieComponent,
    FiltroPipe,
    PelisclientPipe,
    FiltroGenerosPipe,
    CardActorComponent,
    DetailActorComponent,
    FiltroActoresPipe,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    IsAdminGuard
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

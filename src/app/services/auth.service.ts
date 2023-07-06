import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private URL = 'http://localhost:3400/api/auth'

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: {}) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  signUp(user: {}) {
    return this.http.post<any>(this.URL + '/signup', user);
  }


  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken(): string {
    return localStorage.getItem('token')
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userRoles = decodedToken.role;
      return userRoles.includes('admin'); // Verificar si el rol contiene "admin"
    }
    return false; // No hay token o el usuario no tiene el rol de administrador
  }

  isModerator(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userRoles = decodedToken.role;
      return userRoles.includes('moderator'); // Verificar si el rol contiene "moderator"
    }
    return false; // No hay token o el usuario no tiene el rol de administrador
  }
  getUsername(): string {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.name;
    }
    return '';
  }
  getUserId(): string {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.id;
    }
    return '';
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}

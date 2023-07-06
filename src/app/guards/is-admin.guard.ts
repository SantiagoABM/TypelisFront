import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard {

  constructor(
    private authService: AuthService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true; // Usuario es administrador, permitir acceso
    } else {
      this.router.navigate(['/inicio']); // Redirigir a la página principal si no es administrador
      return false;
    }
  }

}

import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const isAdmin = this.authService.isAdmin();
    if (isAdmin == true) {
      this.router.navigate(['/admin']); // Redirigir a la ruta de administrador
    } else {
      this.router.navigate(['/']); // Redirigir a la pantalla de inicio
    }
  }

}

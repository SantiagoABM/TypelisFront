import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActoresService } from 'src/app/services/actores.service';

@Component({
  selector: 'app-newactor',
  templateUrl: './newactor.component.html',
  styleUrls: ['./newactor.component.css']
})
export class NewactorComponent {
  actor: any = {}; 
  constructor(
    private actoresService: ActoresService, 
    public router: Router) { }
  
  submitForm() {
    this.actoresService.createActor(this.actor)
    .subscribe(
      (res) => {
        // La película se ha creado correctamente
        console.log('Actor creada:', res);
        this.router.navigate(['/admin/actores'])
      },
      (err) => {
        // Error al crear la película
        console.error('Error al crear la película:', err);
      }
    );
  }
}

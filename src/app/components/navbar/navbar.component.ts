import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public generos: any = []
  username : string

  constructor(public authService: AuthService,
    public generoService: GeneroService) {
      
  }

  ngOnInit() {
    
    this.generoService.getGeneros().subscribe(
      res => {
        this.generos = res;
      },
      err => console.log(err)

    )
      //.subscribe(
      //  res => {
      //    console.log(res)
      //    this.generos = res;
      //  },
      //  err => console.log(err)

      //)
    this.username = this.authService.getUsername()
  }
}
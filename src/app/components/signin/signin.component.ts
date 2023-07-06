import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  }
  mostrarError = true
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(){

  }
  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/inicio']);
      },
      err => {console.log(err);
      this.mostrarError=false;
      }
    )
    this.authService.getUsername()
  }
  obetenerToken(){
    this.authService.getToken()
  }
}

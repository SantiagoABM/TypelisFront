import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  user = {
    username: '',
    email: '',
    password: '',
    roles: []
  }
q

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }
  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/inicio']);
        },
        err => console.log(err)
      )
    this.authService.getUsername()
  }
}

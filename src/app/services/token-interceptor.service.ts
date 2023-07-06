import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {



  constructor(
    private authService: AuthService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken()
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
      headers = headers.set('x-access-token', token);
    }
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = "https://typelis-deploy-render.onrender.com/api/users/"

  constructor(private http: HttpClient) { }

  getUserById(userId){
    return this.http.get<any>(this.URL + userId)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private URL = "http://localhost:3400/api/users/"

  constructor(private http: HttpClient) { }

  getUserById(userId){
    return this.http.get<any>(this.URL + userId)
  }
}

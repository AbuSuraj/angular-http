import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL =' https://jsonplaceholder.typicode.com'  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}/users`)
  }

  getUser(id:number): Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}/users/${id}`)
  }
}

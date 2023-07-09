import { HttpClient, HttpHeaders } from '@angular/common/http';
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
   let  myHeaders = new HttpHeaders({'my-header': ['Amar head']})
    return this.http.get<User[]>(`${this.BASE_URL}/users`,{headers: myHeaders})
  }

  getUser(id:number): Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}/users/${id}`)

  }

  createUser(user:User): Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}/users`, user)
  }
  
  updateUser(user:User): Observable<User>{
    return this.http.put<User>(`${this.BASE_URL}/users/${user.id}`,user)
  }
  patchUser(user:User): Observable<User>{
    return this.http.patch<User>(`${this.BASE_URL}/users/${user.id}`,user)
  }
  deleteUser(id:number): Observable<void>{
    return this.http.delete<void>(`${this.BASE_URL}/users/${id}`)
  }
}

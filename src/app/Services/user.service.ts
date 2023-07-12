import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL =' https://jsonplaceholder.typicode.com'  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{ 
    return this.http.get<User[]>(`${this.BASE_URL}/users`)
    .pipe(
      map(users =>users.map(user =>({...user, username: user.username.toUpperCase(), isAdmin: user.id===10 ? 'admin': 'user', searchKey:[user.name,user.username]}))),
      
      catchError(this.handleError)

      // catchError((error:any)=>{
      // return of([]); // it is called catch and replace  
      // })
    )
  }
  // getUsers(): Observable<User[]>{
  //   let myParams = new HttpParams().set('page','5').set('sort','true');
  //   myParams = myParams.append('name', 'Suraj')
  //   return this.http.get<User[]>(`${this.BASE_URL}/users`,{params: myParams})
  // }
 private handleError(error: HttpErrorResponse):Observable<never>{
    if(error.status === 404) return throwError({code:404, message:"Error 404 occured"});
    return throwError('an error occurred')
  }
  
  getUser(id:number): Observable<User[]>{
    let  myHeaders = new HttpHeaders({'my-header': ['Amar head']})
    return this.http.get<User[]>(`${this.BASE_URL}/users/${id}`,{headers:myHeaders})

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

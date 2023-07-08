import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './Services/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-http';
  private user: User = {
    'id': 1,
    'name': 'AWS Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
    'address': {
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'geo': {
    'lat': '-37.3159',
    'lng': '81.1496'
    }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
    'name': 'Romaguera-Crona',
    'catchPhrase': 'Multi-layered client-server neural-net',
    'bs': 'harness real-time e-markets'
    }
    }
  constructor(private http: HttpClient, private userService: UserService){ }

  ngOnInit(): void {
     this.onGetUsers();
     this.onGetUser();
     this.onCreateUser();
     this.onUpdateUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe( response =>{
      console.table(response);
    },
    (err: any) =>console.log(err),
    ()=>{console.log('done getting users');}
    )
  }

  onGetUser(): void {
    this.userService.getUser(1).subscribe(response =>{
      console.table(response);
    })
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(response =>{
      console.log(response);
      console.log('created')
    })
  }
  onUpdateUser(): void {
    this.userService.createUser(this.user).subscribe(response =>{
      console.log(response);
      console.log('updated')
    })
  }

}

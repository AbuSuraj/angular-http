import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-http';

  constructor(private http: HttpClient, private userService: UserService){ }

  ngOnInit(): void {
     this.onGetUsers();
     this.onGetUser();
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe( response =>{
      console.log(response);
    },
    (err: any) =>console.log(err),
    ()=>{console.log('done getting users');}
    )
  }

  onGetUser(): void {
    this.userService.getUser(1).subscribe(response =>{
      console.log(response);
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  users: User[] | undefined;
 number: number =0;
  constructor(private http: HttpClient, private userService: UserService){

  }

  ngOnInit(): void {
     this.onGetUsers();
     this.number =0;

  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe( response =>{
      console.table(response);
      this.users = response;
      (error:any)=>console.log(error)
    }
    )
    
  }

}

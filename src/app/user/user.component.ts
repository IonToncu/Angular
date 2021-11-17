import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  public getAllUsers(){
    let url = "http://localhost:8080/user";
    console.log("test\n")
    //this.users = [{"id": "500","userName": "product1", "age":"20"}]
    this.http.get<User[]>(url).subscribe(
      res => {
        console.log(res);
        this.users = res;
      },
      err => {
        //alert("Error");
        
      }
    );

  }
}

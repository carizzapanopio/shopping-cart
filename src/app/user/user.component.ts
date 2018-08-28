import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User("","");
  constructor( private userService: UserService ) { }

  ngOnInit() {
  }

  login(){
    // var login = this.userService.login(this.user);
    if(this.userService.login(this.user)){
      console.log("successfully logged in"+ localStorage.getItem("user"));

    }else{
      console.log("invalid username and password");
    }
  }

}

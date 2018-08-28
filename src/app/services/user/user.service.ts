import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() { }

  login(user: User): boolean{
    console.log(user);

    if("user" === user.username && "user" === user.password){
      localStorage.setItem("user",JSON.stringify(user));
      return true;
    }
    return false;
  }
}

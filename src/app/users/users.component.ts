import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UsersService,User} from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users$:Observable<User[]> = this.usersService.getUsers();
	shouldShowNewUser:boolean=false;
	newUser:User = this.usersService.initializeNewUser();

  	constructor(private usersService:UsersService) { }

  	ngOnInit() {
      /*console.log("new user  value");
      console.log(this.newUser);
      //this.newUser.name = "navaneeth";
      console.log(this.newUser);
      console.log(this.users$);*/
  	}
  	toggleNewUser():void{
  		this.shouldShowNewUser = !this.shouldShowNewUser;
  		if(!this.shouldShowNewUser){
  			this.newUser = this.usersService.initializeNewUser();
  		}
  	}

  	addUser():void {
      console.log("entered to add click")
  		this.usersService.addUser(this.newUser);
  		this.newUser = this.usersService.initializeNewUser();
  	}

}

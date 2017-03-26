import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemsService, UsersService, Item, User } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	items$:Observable<Item[]> = this.itemsService.getItems();
	users$: Observable<User[]> = this.usersService.getUsers();
	shouldShowNewItem: boolean = false;
  	newItem: Item = this.itemsService.initializeNewItem();

  	constructor(

  		private itemsService:ItemsService,
  		private usersService:UsersService
  	) { }

  	toggleNewItem(): void {
	    this.shouldShowNewItem = !this.shouldShowNewItem;

	    if (!this.shouldShowNewItem)
	      this.newItem = this.itemsService.initializeNewItem();
  	}

  	addItem(): void {
    	this.itemsService.addItem(this.newItem);
    	this.newItem = this.itemsService.initializeNewItem();
  	}

  	ngOnInit() {
        
        console.log("new Item value");
        console.log(this.newItem);
        console.log(this.users$);
        console.log(this.items$);
      //this.newUser.name = "navaneeth";
      //console.log(this.newItem);
  	}

}

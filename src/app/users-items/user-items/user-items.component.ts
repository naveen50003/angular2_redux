import { Component, OnInit,Input } from '@angular/core';
import { UserItems } from '../../shared';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent implements OnInit {

	@Input() userItems: UserItems;
  	constructor() { }

  	ngOnInit() {
  	}

}

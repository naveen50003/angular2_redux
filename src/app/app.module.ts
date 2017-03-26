import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ItemsComponent } from './items/items.component';
//import { SharedComponent } from './shared/shared.component';
import { UsersItemsComponent } from './users-items/users-items.component';
import { UserComponent } from './users/user/user.component';
import { UserItemsComponent } from './users-items/user-items/user-items.component';
import { ItemComponent } from './items/item/item.component';

import {
  UsersService,
  UsersItemsService,
  ItemsService,
  users,
  items
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ItemsComponent,
   // SharedComponent,
    UsersItemsComponent,
    UserComponent,
    UserItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({users,items})
  ],
  providers: [

    UsersService,
    UsersItemsService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

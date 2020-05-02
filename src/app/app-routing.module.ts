import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {AddUserComponent} from "./add-user/add-user.component";
import {UsersComponent} from "./users/users.component";
import {EditUserComponent} from "./edit-user/edit-user.component";


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'add-user', component: AddUserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'edit-user/:id', component: EditUserComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

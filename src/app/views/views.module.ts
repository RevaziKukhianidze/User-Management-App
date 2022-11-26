import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListPgComponent } from './users-list-pg/users-list-pg.component';
import { UserDetailsPgComponent } from './user-details-pg/user-details-pg.component';
import { CategoriesPgComponent } from './categories-pg/categories-pg.component';
import { StatusesPgComponent } from './statuses-pg/statuses-pg.component';



@NgModule({
  declarations: [
    UsersListPgComponent,
    UserDetailsPgComponent,
    CategoriesPgComponent,
    StatusesPgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListPgComponent } from './users-list-pg/users-list-pg.component';
import { UserDetailsPgComponent } from './user-details-pg/user-details-pg.component';
import { CategoriesPgComponent } from './categories-pg/categories-pg.component';
import { StatusesPgComponent } from './statuses-pg/statuses-pg.component';
import { ListAreaComponent } from './users-list-pg/list-area/list-area.component';
import { FilterAreaComponent } from './users-list-pg/filter-area/filter-area.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

const shared: any = [
  CommonModule,
  UsersListPgComponent,
  UserDetailsPgComponent,
  CategoriesPgComponent,
  StatusesPgComponent,
  ListAreaComponent,
  FilterAreaComponent,
  HttpClientModule,
  FormsModule,
  BrowserModule,
  MatPaginatorModule,
  MatDialogModule,
  BrowserAnimationsModule,
];

const materialShared: any = {
  MatInputModule,
  MatDialogModule,
};

@NgModule({
  declarations: [
    UsersListPgComponent,
    UserDetailsPgComponent,
    CategoriesPgComponent,
    StatusesPgComponent,
    ListAreaComponent,
    FilterAreaComponent,
  ],
  imports: [
    MatDialogModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  exports: [[...shared]],
})
export class ViewsModule {}

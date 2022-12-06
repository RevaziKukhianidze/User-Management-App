import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesPgComponent } from './categories-pg/categories-pg.component';
import { StatusesPgComponent } from './statuses-pg/statuses-pg.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
import { UsersPgComponent } from './users-pg/users-pg.component';
import { CreateUserComponent } from './users-pg/create-user/create-user.component';
import { ReadUsersComponent } from './users-pg/read-users/read-users.component';
import { UpdateUserComponent } from './users-pg/update-user/update-user.component';

const shared: any = [
  CommonModule,
  UsersPgComponent,
  CreateUserComponent,
  ReadUsersComponent,
  UpdateUserComponent,
  CategoriesPgComponent,
  StatusesPgComponent,
  HttpClientModule,
  FormsModule,
  BrowserModule,
  MatPaginatorModule,
  BrowserAnimationsModule,
];

@NgModule({
  declarations: [
    CategoriesPgComponent,
    StatusesPgComponent,
    UsersPgComponent,
    CreateUserComponent,
    ReadUsersComponent,
    UpdateUserComponent,
  ],
  exports: [[...shared]],
  imports: [
    MatDialogModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
  ],
})
export class ViewsModule {}

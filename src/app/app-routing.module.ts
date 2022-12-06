import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPgComponent } from './views/categories-pg/categories-pg.component';
import { StatusesPgComponent } from './views/statuses-pg/statuses-pg.component';
import { CreateUserComponent } from './views/users-pg/create-user/create-user.component';
import { ReadUsersComponent } from './views/users-pg/read-users/read-users.component';
import { UpdateUserComponent } from './views/users-pg/update-user/update-user.component';
import { UsersPgComponent } from './views/users-pg/users-pg.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPgComponent,
    children: [
      { path: '', component: ReadUsersComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'update/:id', component: UpdateUserComponent },
    ],
  },
  { path: 'categories', component: CategoriesPgComponent },
  { path: 'statuses', component: StatusesPgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

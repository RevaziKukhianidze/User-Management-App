import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPgComponent } from './views/categories-pg/categories-pg.component';
import { StatusesPgComponent } from './views/statuses-pg/statuses-pg.component';
import { UserDetailsPgComponent } from './views/user-details-pg/user-details-pg.component';
import { UsersListPgComponent } from './views/users-list-pg/users-list-pg.component';

const routes: Routes = [
  { path: '', component: UsersListPgComponent },
  { path: 'users', component: UsersListPgComponent },
  { path: 'user-details', component: UserDetailsPgComponent },
  { path: 'categories', component: CategoriesPgComponent },
  { path: 'statuses', component: StatusesPgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

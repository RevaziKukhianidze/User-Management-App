import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';
import { StatusesService } from 'src/app/shared/shared-services/statuses.service';
import { UsersService } from 'src/app/shared/shared-services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  categories!: any;
  statuses!: any;

  updateUserId!: any;
  currentUserItem!: any;

  constructor(
    private usersService: UsersService,
    private categoriesService: CategoriesService,
    private statusesService: StatusesService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesService.readAllCategories().subscribe((response: any) => {
      this.categories = response.data;
    });

    this.statusesService.readAllStatuses().subscribe((response: any) => {
      this.statuses = response.data;
    });
  }

  onFormsSubmit(form: NgForm) {
    console.log('form.value', form.value);
    this.usersService.createUser(form.value).subscribe((response) => {
      if (response) {
        this.router.navigate(['/users']);
      }
    });
  }
}

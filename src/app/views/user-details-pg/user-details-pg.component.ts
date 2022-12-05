import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';
import { StatusesService } from 'src/app/shared/shared-services/statuses.service';
import { UsersService } from 'src/app/shared/shared-services/users.service';

@Component({
  selector: 'app-user-details-pg',
  templateUrl: './user-details-pg.component.html',
  styleUrls: ['./user-details-pg.component.css'],
})
export class UserDetailsPgComponent implements OnInit {
  userItem!: any;

  updateUserId!: any;

  categories!: any;
  statuses!: any;

  constructor(
    private usersService: UsersService,
    private categoriesService: CategoriesService,
    private statusesService: StatusesService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.categoriesService.readAllCategories().subscribe((response: any) => {
      this.categories = response.data;
      console.log(this.categories);
    });

    this.statusesService.readAllStatuses().subscribe((response: any) => {
      this.statuses = response.data;
      console.log(this.categories);
    });

    this.usersService.updateUserEmitter.subscribe((response) => {
      this.updateUserId = response;
      this.loadEditdata();
    });
  }

  initForm() {
    this.userItem = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      idNumber: new FormControl(null),
      birthDate: new FormControl(null),
      category: new FormControl(null),
      status: new FormControl(null),
    });
  }

  loadEditdata() {
    console.log(this.updateUserId);
    this.usersService.getSingleUser(this.updateUserId).subscribe((response) => {
      if (response) {
        console.log('respo', response);
        this.userItem.setValue({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          idNumber: Number(response.data.idNumber),
          birthDate: response.data.birthDate,
          category: response.data.category,
          status: response.data.status,
        });
      }
    });

    console.log('this.updateUserId', this.updateUserId);

    console.log('userItem', this.userItem);
  }

  onFormsSubmit() {
    this.usersService.createUser(this.userItem.value).subscribe();
    this.userItem.reset();
  }

  onSaveBtn() {}
}

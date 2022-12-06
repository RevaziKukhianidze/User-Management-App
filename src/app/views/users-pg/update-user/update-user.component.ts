import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';
import { StatusesService } from 'src/app/shared/shared-services/statuses.service';
import { UsersService } from 'src/app/shared/shared-services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  categories!: any;
  statuses!: any;

  @ViewChild('form') form!: NgForm;
  currentUserItem!: any;

  constructor(
    private usersService: UsersService,
    private categoriesService: CategoriesService,
    private statusesService: StatusesService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriesService.readAllCategories().subscribe((response: any) => {
      this.categories = response.data;
    });

    this.statusesService.readAllStatuses().subscribe((response: any) => {
      this.statuses = response.data;
    });
    this.activatedRoute.params.subscribe((paramsResponse) => {
      var UserId = paramsResponse['id'];
      this.usersService.getSingleUser(UserId).subscribe((response) => {
        this.currentUserItem = response.data;
        this.currentUserItem.birthDate = this.getDate(
          this.currentUserItem.birthDate
        );

        this.form.setValue(this.currentUserItem);
      });
    });
  }

  getDate(dateText: string): any {
    let tmp = new Date(dateText);
    return this.datePipe.transform(tmp, 'yyyy-MM-dd');
  }

  onFormsSubmit(form: NgForm) {
    console.log('test', this.currentUserItem._id, form.value);
    this.usersService
      .updateUser(this.currentUserItem._id, form.value)
      .subscribe((response) => {
        console.log('rsponse update', response);
        if (response) {
          this.router.navigate(['/users']);
        }
      });
  }
}

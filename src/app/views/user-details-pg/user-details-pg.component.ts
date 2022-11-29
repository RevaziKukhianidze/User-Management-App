import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/shared-services/users.service';

@Component({
  selector: 'app-user-details-pg',
  templateUrl: './user-details-pg.component.html',
  styleUrls: ['./user-details-pg.component.css'],
})
export class UserDetailsPgComponent implements OnInit {
  constructor(private UsersService: UsersService) {}

  ngOnInit(): void {}

  onFormsSubmit(form: NgForm) {
    this.UsersService.createUser(form.value).subscribe();
  }
}

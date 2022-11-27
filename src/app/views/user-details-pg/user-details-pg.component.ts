import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details-pg',
  templateUrl: './user-details-pg.component.html',
  styleUrls: ['./user-details-pg.component.css'],
})
export class UserDetailsPgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onFormsSubmit(form: NgForm) {
    console.log(form.value);
  }
}

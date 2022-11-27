import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from 'src/app/shared/shared-services/users.service';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css'],
})
export class ListAreaComponent implements OnInit {
  users: any[] = [];
  pageSize: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.readAllUsers();
  }

  readAllUsers() {
    this.usersService.readAllUsers().subscribe((response: any) => {
      this.users = response;
      this.pageSize = response.slice(0, 5);
      console.log(this.users);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.users.length) {
      endIndex = this.users.length;
    }
    this.pageSize = this.users.slice(startIndex, endIndex);
  }
}

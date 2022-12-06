import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsersService } from 'src/app/shared/shared-services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-users',
  templateUrl: './read-users.component.html',
  styleUrls: ['./read-users.component.css'],
})
export class ReadUsersComponent {
  users: any[] = [];
  pageSize: any[] = [];
  searchText: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.readAllUsers();

    this.usersService.changeEmitter.subscribe(() => {
      this.readAllUsers();
    });
  }

  readAllUsers() {
    this.usersService.getAllUsers().subscribe((response: any) => {
      this.users = response.data;
      this.pageSize = response.data.slice(0, 5);
    });
  }

  onDeleteUserBtn(id: string) {
    Swal.fire({
      title: 'Do you want to delete this user?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe();
      }
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

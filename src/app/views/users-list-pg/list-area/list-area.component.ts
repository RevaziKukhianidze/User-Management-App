import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { UsersService } from 'src/app/shared/shared-services/users.service';
import Swal from 'sweetalert2';
import { UserDetailsPgComponent } from '../../user-details-pg/user-details-pg.component';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css'],
})
export class ListAreaComponent implements OnInit {
  users: any[] = [];
  pageSize: any[] = [];

  @ViewChild(UserDetailsPgComponent) openModal!: UserDetailsPgComponent;

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
  onUpdateUserBtn(userId: any) {
    // this.openModal.loadEditdata(userId);
    this.usersService.updateUserEmitter.emit(userId);
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
    console.log(this.pageSize);
  }
}

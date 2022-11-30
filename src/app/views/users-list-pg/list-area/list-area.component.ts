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

    this.usersService.changeEmitter.subscribe(() => {
      this.readAllUsers();
      console.log(123);
    });
  }

  readAllUsers() {
    this.usersService.getAllUsers().subscribe((response: any) => {
      this.users = response.data;
      console.log('sdsa', response);
    });
  }
}

// readAllUsers() {
//   this.usersService.getAllUsers().subscribe(
//     (response: any) => {
//       this.users = response.data;

//       //   this.usersUpdated$ = this.usersService.usersUpdated$.subscribe(
//       //     (users) => {
//       //       console.log('subscribed in list', users);
//       //       this.users = users;
//       //     }
//       //   );
//       //   this.pageSize = response.data.slice(0, 5);
//       // });
//     }

//     // onPageChange(event: PageEvent) {
//     //   const startIndex = event.pageIndex * event.pageSize;
//     //   let endIndex = startIndex + event.pageSize;
//     //   if (endIndex > this.users.length) {
//     //     endIndex = this.users.length;
//     //   }
//     //   this.pageSize = this.users.slice(startIndex, endIndex);
//     // }

//     // ngOnDestroy(): void {
//     //   this.usersUpdated$.unsubscribe();
//     // }
//   );
// }

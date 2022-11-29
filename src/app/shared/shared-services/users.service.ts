import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { userModel } from '../shared-models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}
  changeEmitter: EventEmitter<void> = new EventEmitter();

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  createUser(user: userModel) {
    return this.httpClient.post(this.apiUrl, user).pipe(
      map((response: any) => {
        this.changeEmitter.emit();
        return response;
      })
    );
  }
}

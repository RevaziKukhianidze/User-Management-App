import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userModel } from '../shared-models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  addUserEmitter = new EventEmitter<any>();

  private apiUrl!: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.baseUrl}`;
  }

  readAllUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  createUser(user: userModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, user).pipe(
      map((response: any) => {
        this.addUserEmitter.emit();
        return response;
      })
    );
  }
}

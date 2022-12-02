import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { statusModel } from '../shared-models/status.model';

@Injectable({
  providedIn: 'root',
})
export class StatusesService {
  private apiUrl!: string;

  changeEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.baseStatusesApiUrl}`;
  }

  readAllStatuses(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  readSingleStatus(statusIdId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${statusIdId}`);
  }

  createStatus(statusItem: statusModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, statusItem).pipe(
      map((response: any) => {
        this.changeEmitter.emit();
      })
    );
  }

  updateStatus(statusItem: statusModel): Observable<any> {
    return this.httpClient
      .put(`${this.apiUrl}/${statusItem.id}`, statusItem)
      .pipe(
        map((response: any) => {
          this.changeEmitter.emit();
        })
      );
  }

  deleteStatus(statusId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${statusId}`).pipe(
      map((response: any) => {
        this.changeEmitter.emit();
      })
    );
  }
}

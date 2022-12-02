import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { categoryModel } from '../shared-models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl!: string;

  changeEmitter: EventEmitter<void> = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.baseCategoriesApiUrl}`;
  }

  readAllCategories(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  readSingleCategory(categoryId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${categoryId}`);
  }

  createCategory(categoryItem: categoryModel): Observable<any> {
    return this.httpClient.post(this.apiUrl, categoryItem).pipe(
      map((response: any) => {
        this.changeEmitter.emit();
      })
    );
  }

  updateCategory(categoryItem: categoryModel): Observable<any> {
    return this.httpClient
      .put(`${this.apiUrl}/${categoryItem.id}`, categoryItem)
      .pipe(
        map((response: any) => {
          this.changeEmitter.emit();
        })
      );
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${categoryId}`).pipe(
      map((response: any) => {
        this.changeEmitter.emit();
      })
    );
  }
}

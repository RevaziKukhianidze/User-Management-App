import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categoryModel } from '../shared-models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl!: string;

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
    return this.httpClient.post(this.apiUrl, categoryItem);
  }

  updateCategory(categoryItem: categoryModel): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/${categoryItem.id}`,
      categoryItem
    );
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${categoryId}`);
  }
}

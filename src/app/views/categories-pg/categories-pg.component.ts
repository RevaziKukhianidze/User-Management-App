import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';

@Component({
  selector: 'app-categories-pg',
  templateUrl: './categories-pg.component.html',
  styleUrls: ['./categories-pg.component.css'],
})
export class CategoriesPgComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.readAllCategories();
  }

  readAllCategories() {
    this.categoriesService.readAllCategories().subscribe((response: any) => {
      this.categories = response.data;
      console.log(this.categories);
    });
  }
}

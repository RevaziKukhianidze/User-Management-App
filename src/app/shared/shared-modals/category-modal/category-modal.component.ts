import { Component, OnInit } from '@angular/core';
import { categoryModel } from '../../shared-models/category.model';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  categoryItem!: categoryModel;
  constructor() {}

  ngOnInit(): void {}
  onModalSubmit() {}
}

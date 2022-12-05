import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesPgComponent } from 'src/app/views/categories-pg/categories-pg.component';
import { CategoriesService } from '../../shared-services/categories.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  categoryItem!: any;

  updateItemId!: string;

  constructor(
    private categoriesService: CategoriesService,
    private categoriesPgComponent: CategoriesPgComponent
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.categoriesPgComponent.updateCategoryEmitter.subscribe((response) => {
      this.updateItemId = response._id;
    });
  }

  initForm() {
    this.categoryItem = new FormGroup({
      categoryName: new FormControl(),
    });
  }

  @Input() showModal!: boolean;
  @Output() showModalEmitter = new EventEmitter<boolean>();

  loadEditData(item: any) {
    this.showModal = !this.showModal;
    this.categoryItem.setValue({
      categoryName: item.categoryName,
    });
  }

  onAddBtn() {
    if (!this.updateItemId) {
      this.categoriesService
        .createCategory(this.categoryItem.value)
        .subscribe();
      this.categoryItem.reset();
      this.showModal = false;
    } else {
      const value = JSON.parse(JSON.stringify(this.categoryItem.value));
      const categoryItemvalue = JSON.parse(JSON.stringify(value));
      const obj = {
        id: this.updateItemId,
        categoryName: categoryItemvalue.categoryName,
      };
      this.categoriesService.updateCategory(obj).subscribe();
      this.categoryItem.reset();
      this.showModal = false;
    }
  }

  onModalBtnClose() {
    this.showModal = false;
    this.categoryItem.reset();
  }
}

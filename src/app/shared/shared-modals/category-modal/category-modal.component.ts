import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesPgComponent } from 'src/app/views/categories-pg/categories-pg.component';
import { CategoriesService } from '../../shared-services/categories.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  updateCategoryItem!: any;

  constructor(
    private categoriesService: CategoriesService,
    private categoriesPgComponent: CategoriesPgComponent
  ) {}

  ngOnInit(): void {
    this.categoriesPgComponent.updateCategoryEmitter.subscribe((item) => {
      this.updateCategoryItem = item;
      console.log('reseived from emiter', this.updateCategoryItem);
    });
  }

  @Input() showModal!: boolean;

  @Output() showModalEmitter = new EventEmitter<boolean>();

  onModalBtnClose() {
    this.showModal = false;
  }

  onShowMoadl() {
    this.showModal = !this.showModal;
    this.showModalEmitter.emit(this.showModal);
  }

  onAddBtn(form: NgForm) {
    this.categoriesService.createCategory(form.value).subscribe();
    this.showModal = false;
  }
}

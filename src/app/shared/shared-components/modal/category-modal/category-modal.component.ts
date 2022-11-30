import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {}

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
    console.log('parse', form.value);
    this.categoriesService.createCategory(form.value).subscribe();
  }
}

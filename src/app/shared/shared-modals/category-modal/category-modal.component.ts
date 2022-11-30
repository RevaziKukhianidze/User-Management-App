import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categoryModel } from '../../shared-models/category.model';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  constructor() {}

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
  onAddBtn(form: HTMLInputElement) {
    // aq vwer serviss
  }
}

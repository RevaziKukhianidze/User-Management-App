import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryModalComponent } from 'src/app/shared/shared-modals/category-modal/category-modal.component';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';

@Component({
  selector: 'app-categories-pg',
  templateUrl: './categories-pg.component.html',
  styleUrls: ['./categories-pg.component.css'],
})
export class CategoriesPgComponent implements OnInit {
  categories: any[] = [];
  showModal: boolean = false;

  @Output() showModalEmitter = new EventEmitter<boolean>();

  constructor(
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.readAllCategories();
  }

  readAllCategories() {
    this.categoriesService.readAllCategories().subscribe((response: any) => {
      this.categories = response.data;
      console.log(this.categories);
    });
  }

  onAddCategoryBtn() {
    this.showModal = !this.showModal;
  }

  onShowModalSubscriber(event: boolean) {
    this.showModal = true;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryModalComponent } from 'src/app/shared/shared-modals/category-modal/category-modal.component';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories-pg',
  templateUrl: './categories-pg.component.html',
  styleUrls: ['./categories-pg.component.css'],
})
export class CategoriesPgComponent implements OnInit {
  categories: any[] = [];
  showModal: boolean = false;

  @Output() showModalEmitter = new EventEmitter<boolean>();
  @Output() updateCategoryEmitter = new EventEmitter();

  constructor(
    private categoriesService: CategoriesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.readAllCategories();

    this.categoriesService.changeEmitter.subscribe(() => {
      this.readAllCategories();
    });
  }

  readAllCategories() {
    this.categoriesService.readAllCategories().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  onShowModalSubscriber(event: boolean) {
    this.showModal = false;
  }

  onAddCategoryBtn() {
    this.showModal = !this.showModal;
  }

  onDeleteCategoryBtn(id: string) {
    Swal.fire({
      title: 'Do you want to delete this Category?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriesService.deleteCategory(id).subscribe();
      }
    });
  }
  onUpdateCategoryBtn(categoryItem: any) {
    this.showModal = !this.showModal;
    this.updateCategoryEmitter.emit(categoryItem);
  }
}

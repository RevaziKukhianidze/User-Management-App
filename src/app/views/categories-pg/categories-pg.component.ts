import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CategoryModalComponent } from 'src/app/shared/shared-modals/category-modal/category-modal.component';
import { CategoriesService } from 'src/app/shared/shared-services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories-pg',
  templateUrl: './categories-pg.component.html',
  styleUrls: ['./categories-pg.component.css'],
})
export class CategoriesPgComponent implements OnInit {
  pageSize: any[] = [];
  categories: any[] = [];
  showModal: boolean = false;
  searchText: any;

  @Output() showModalEmitter = new EventEmitter<boolean>();
  @Output() updateCategoryEmitter = new EventEmitter();
  @ViewChild(CategoryModalComponent) openModal!: CategoryModalComponent;
  @Output() editItemUpdateId = new EventEmitter();

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
      this.pageSize = response.data.slice(0, 5);
    });
  }

  onUpdateCategoryBtn(item: any) {
    this.openModal.loadEditData(item);
    this.updateCategoryEmitter.emit(item);
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
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.categories.length) {
      endIndex = this.categories.length;
    }
    this.pageSize = this.categories.slice(startIndex, endIndex);
    console.log(this.pageSize);
  }
}

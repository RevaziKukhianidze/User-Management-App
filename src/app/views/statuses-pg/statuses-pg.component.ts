import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { StatusModalComponent } from 'src/app/shared/shared-modals/status-modal/status-modal.component';
import { StatusesService } from 'src/app/shared/shared-services/statuses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-statuses-pg',
  templateUrl: './statuses-pg.component.html',
  styleUrls: ['./statuses-pg.component.css'],
})
export class StatusesPgComponent implements OnInit {
  pageSize: any[] = [];
  statuses: any[] = [];
  showModal: boolean = false;
  searchText: any;

  @Output() showModalEmitter = new EventEmitter<boolean>();
  @Output() updateStatusEmitter = new EventEmitter();
  @ViewChild(StatusModalComponent) openModal!: StatusModalComponent;
  @Output() editItemUpdateId = new EventEmitter();

  constructor(private statusesService: StatusesService) {}

  ngOnInit(): void {
    this.readAllStatuses();

    this.statusesService.changeEmitter.subscribe(() => {
      this.readAllStatuses();
    });
  }

  readAllStatuses() {
    this.statusesService.readAllStatuses().subscribe((response: any) => {
      this.statuses = response.data;
      this.pageSize = response.data.slice(0, 5);
    });
  }

  onUpdateStatusBtn(item: any) {
    this.openModal.loadEditData(item);
    this.updateStatusEmitter.emit(item);
  }
  onShowModalSubscriber(event: boolean) {
    this.showModal = false;
  }
  onAddStatusBtn() {
    this.showModal = !this.showModal;
  }

  onDeleteStatusBtn(id: string) {
    Swal.fire({
      title: 'Do you want to delete this Status?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.statusesService.deleteStatus(id).subscribe();
      }
    });
  }
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.statuses.length) {
      endIndex = this.statuses.length;
    }
    this.pageSize = this.statuses.slice(startIndex, endIndex);
    console.log(this.pageSize);
  }
}

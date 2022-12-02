import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { StatusModalComponent } from 'src/app/shared/shared-modals/status-modal/status-modal.component';
import { StatusesService } from 'src/app/shared/shared-services/statuses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-statuses-pg',
  templateUrl: './statuses-pg.component.html',
  styleUrls: ['./statuses-pg.component.css'],
})
export class StatusesPgComponent implements OnInit {
  statuses: any[] = [];
  showModal: boolean = false;

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
}

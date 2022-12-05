import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StatusesPgComponent } from 'src/app/views/statuses-pg/statuses-pg.component';
import { StatusesService } from '../../shared-services/statuses.service';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css'],
})
export class StatusModalComponent implements OnInit {
  statusItem!: any;

  editdata: any;

  updateItemId!: string;

  constructor(
    private statusesService: StatusesService,
    private statusesPgComponent: StatusesPgComponent
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.statusesPgComponent.updateStatusEmitter.subscribe((response) => {
      this.updateItemId = response;
    });
  }

  initForm() {
    this.statusItem = new FormGroup({
      statusName: new FormControl(),
    });
  }

  @Input() showModal!: boolean;
  @Output() showModalEmitter = new EventEmitter<boolean>();

  loadEditData(item: any) {
    this.showModal = !this.showModal;
    this.statusItem.setValue({
      statusName: item.statusName,
    });
  }

  onAddBtn() {
    if (!this.updateItemId) {
      this.statusesService.createStatus(this.statusItem.value).subscribe();
      this.statusItem.reset();
      this.showModal = false;
    } else {
      const value = JSON.parse(JSON.stringify(this.statusItem.value));
      const statusItemvalue = JSON.parse(JSON.stringify(value));
      const obj = {
        id: this.updateItemId,
        statusName: statusItemvalue.statusName,
      };
      this.statusesService.updateStatus(obj).subscribe();
      this.statusItem.reset();
      this.showModal = false;
    }
  }
  onModalBtnClose() {
    this.showModal = false;
    this.statusItem.reset();
  }
}

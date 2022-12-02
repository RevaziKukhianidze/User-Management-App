import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { CategoryModalComponent } from './shared-modals/category-modal/category-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusModalComponent } from './shared-modals/status-modal/status-modal.component';

const shared: any = [
  CommonModule,
  SharedComponentsModule,
  FormsModule,
  MatDialogModule,
  MatButtonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [CategoryModalComponent, StatusModalComponent],
  imports: [...shared],
  exports: [...shared, CategoryModalComponent, StatusModalComponent],
})
export class SharedModule {}

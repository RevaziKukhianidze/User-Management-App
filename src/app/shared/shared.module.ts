import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { CategoryModalComponent } from './shared-modals/category-modal/category-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const shared: any = [
  CommonModule,
  SharedComponentsModule,
  FormsModule,
  MatDialogModule,
  MatButtonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [CategoryModalComponent],
  imports: [...shared],
  exports: [...shared, CategoryModalComponent],
})
export class SharedModule {}

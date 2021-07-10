import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponentsModule } from './material-components/material-components.module';
import { IncrementInputComponent } from './components/increment-input/increment-input.component';

@NgModule({
  declarations: [IncrementInputComponent],
  imports: [
    CommonModule,

    MaterialComponentsModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialComponentsModule,

    FormsModule,
    ReactiveFormsModule,

    IncrementInputComponent
  ],
})
export class SharedModule { }

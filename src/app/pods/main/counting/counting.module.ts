import { SharedModule } from '../../../shared/shared.module';
import { CountingRoutingModule } from './counting-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingComponent } from './counting.component';

@NgModule({
  declarations: [
    CountingComponent
  ],
  imports: [
    CommonModule,
    CountingRoutingModule,
    SharedModule
  ]
})
export class CountingModule { }

import { SharedModule } from './../../../shared/shared.module';
import { InsightsRoutingModule } from './insights-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsComponent } from './insights.component';

@NgModule({
  declarations: [InsightsComponent],
  imports: [
    CommonModule,
    InsightsRoutingModule,
    SharedModule
  ]
})
export class InsightsModule { }

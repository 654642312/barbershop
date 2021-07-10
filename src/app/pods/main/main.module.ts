import { MaterialComponentsModule } from './../../shared/material-components/material-components.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    MainComponent, 
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,

    MaterialComponentsModule,
    
    SharedModule,

    MatSidenavModule,
  ]
})
export class MainModule { }

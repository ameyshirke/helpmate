import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {HomeModule} from "../home/home.module";
import {TimelineModule} from "../timeline/timeline.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    TimelineModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }


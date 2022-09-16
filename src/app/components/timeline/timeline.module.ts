import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    TimelineComponent
  ]
})
export class TimelineModule { }

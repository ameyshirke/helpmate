import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashMsgComponent } from './dash-msg.component';



@NgModule({
  declarations: [
    DashMsgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashMsgComponent
  ]
})
export class DashMsgModule { }

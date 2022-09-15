import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {DashMsgModule} from "../dash-msg/dash-msg.module";
import {SearchBarModule} from "../search-bar/search-bar.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashMsgModule,
    SearchBarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

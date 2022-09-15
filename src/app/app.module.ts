import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StepperModule} from "./components/stepper/stepper.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "./components/home/home.module";
import {NavBarModule} from "./components/nav-bar/nav-bar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StepperModule,
        BrowserAnimationsModule,
        HomeModule,
        NavBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

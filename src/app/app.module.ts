import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StepperModule} from "./components/stepper/stepper.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "./components/home/home.module";
import {NavBarModule} from "./components/nav-bar/nav-bar.module";
import {TimelineModule} from "./components/timeline/timeline.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
        NavBarModule,
      TimelineModule,
      NgbModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperComponent} from "./components/stepper/stepper.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sessions', component: StepperComponent },
  { path: 'home', component: DashboardComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}

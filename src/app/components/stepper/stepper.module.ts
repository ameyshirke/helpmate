import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {RadioButtonModule} from "../radio-button/radio-button.module";



@NgModule({
  declarations: [
    StepperComponent
  ],
    imports: [
        CommonModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        RadioButtonModule
    ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }

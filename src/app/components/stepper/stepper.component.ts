import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {Option, SessionInfo} from "./session-utils";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  ngOnInit(): void {
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  onSessionTypeSelected($event: number, stepper: MatStepper) {

  }

  readonly workflowItems: SessionInfo[] = [
    new SessionInfo('Some Question', [
      new Option(1, 'Option 1'),
      new Option(2, 'Option 2'),
    ])
  ];
}

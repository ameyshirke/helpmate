import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {Option, SessionInfo} from "./session-utils";
import {HelpmateService} from "../../service/helpmate.service"
import { Session, Scenario, Media, Question, QuestionFeature, Answer } from '../../model/all.model'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private helpmateService : HelpmateService) {}

  session : Session;

  ngOnInit(): void {
    this.helpmateService.getSessionFlow().then((value) => {
      console.log("********************* "+value.scenarios[0].questionList[0].answers.length);
      this.session = value;
    });
  }

  mediaFormGroup = this._formBuilder.group({
    //mediaCtrl: ['', Validators.required],
  });
  transcriptFormGroup = this._formBuilder.group({
    //transcriptCtrl: ['', Validators.required],
  });
  queFormGroup = this._formBuilder.group({
    queCtrl: ['', Validators.required],
  });

  senarioFormGroup = this._formBuilder.group({
    queCtrl: ['', Validators.required],
  });

  isLinear = false;



  onSessionTypeSelected($event: number, stepper: MatStepper) {

  }

}

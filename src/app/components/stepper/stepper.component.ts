import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";
import {Option, SessionInfo} from "./session-utils";
import {HelpmateService} from "../../service/helpmate.service"
import { Session, Scenario, Media, Question, QuestionFeature, Answer } from '../../model/all.model'
import {Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: "Not vivid" },
      { value: 10 },
      { value: 20 },
      { value: 30 },
      { value: 40 },
      { value: 50},
      { value: 60},
      { value: 70 },
      { value: 80  },
      { value: 90  },
      {value: 100 ,legend: "Extremely vivid"}
    ]
  };

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
    slider: ['', Validators.required],
  });

  senarioFormGroup = this._formBuilder.group({
    queCtrl: ['', Validators.required],
  });

  sliderFG = this._formBuilder.group({
    // sliderform: ['', Validators.required],
  });

  isLinear = false;



  onSessionTypeSelected($event: number, stepper: MatStepper) {

  }

}

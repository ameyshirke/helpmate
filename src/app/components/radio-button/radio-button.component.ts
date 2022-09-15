import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Answer } from 'src/app/model/all.model';
import {Option} from "../stepper/session-utils";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  @Input() answers: Answer[];
  @Output() itemSelected = new EventEmitter<number>();
  @Input() parentForm: FormGroup;
  @Input() itemControlName: string;

  constructor() {
  }


  ngOnInit(): void {}

  onItemSelected(selectedIndex: number) {
    this.itemSelected.emit(selectedIndex);
  }
}

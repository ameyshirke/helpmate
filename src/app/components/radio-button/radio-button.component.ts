import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Option} from "../stepper/session-utils";

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  @Input() options: Option[];
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

import {Component, OnInit} from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-background-player',
  templateUrl: './background-player.component.html',
  styleUrls: ['./background-player.component.scss']
})
export class BackgroundPlayerComponent implements OnInit {
  sourceFile: any;


  constructor() {
  }

  ngOnInit() {
    console.log("loaded")
    this.sourceFile = "../assets/audio/sample.mp3";
  }


}

import { Component, OnInit } from '@angular/core';

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
    // this.play();
    //
    // var audio:any = document.createElement("AUDIO")
    // document.body.appendChild(audio);
    // audio.src = "./assets/audio/sample.mp3"
  }



}

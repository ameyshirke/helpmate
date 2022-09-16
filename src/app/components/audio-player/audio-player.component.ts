import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  @Input() audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  @Input() title = "Scenario 1";
  @Input() coverImage = "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg";
  audioList: any[] = undefined;

  constructor() {
    this.audioList = [
      {
        url: this.audioUrl,
        title: this.title,
        cover: this.coverImage,
      }
    ];
  }

  ngOnInit(): void {
  }

}

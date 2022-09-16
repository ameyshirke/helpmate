import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player.component';
import {AngMusicPlayerModule} from "ang-music-player";



@NgModule({
  declarations: [
    AudioPlayerComponent
  ],
    imports: [
        CommonModule,
        AngMusicPlayerModule
    ],
  exports: [
    AudioPlayerComponent
  ]
})
export class AudioPlayerModule { }

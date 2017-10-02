import { Component, OnInit, Input } from '@angular/core';
import { HearthisPlayerService } from '../../../core/hearthis-player/hearthis-player.service';

@Component({
  selector: 'app-audio-card',
  templateUrl: './audio-card.component.html',
  styleUrls: ['./audio-card.component.css']
})
export class AudioCardComponent implements OnInit {

  @Input() data: any;
  
  constructor(private hearthisPlayerService: HearthisPlayerService) { }

  ngOnInit() {
  }

  public play(){
      this.hearthisPlayerService.play(this.data.hearthisId);
  }

}

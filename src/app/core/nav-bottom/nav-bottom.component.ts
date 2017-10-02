import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { HearthisPlayerService, HearthisPlayerState } from '../hearthis-player/hearthis-player.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css']
})
export class NavBottomComponent implements OnInit, OnDestroy {
  audioToPlay: number = null;

  private hearthisPlayerStateChanged: Subscription;

  constructor(private hearthisPlayerService: HearthisPlayerService) { }

  ngOnInit() {
    this.hearthisPlayerStateChanged = this.hearthisPlayerService.hearthisPlayerState
      .subscribe((state: HearthisPlayerState) => this.audioToPlay = state.play)
  }

  ngOnDestroy() {
    this.hearthisPlayerStateChanged.unsubscribe();
  }
}

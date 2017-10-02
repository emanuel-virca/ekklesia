import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../module-import-guard';

import { HearthisPlayerComponent } from './hearthis-player.component';
import { HearthisPlayerService } from './hearthis-player.service';

@NgModule({
  imports: [CommonModule],
  exports: [HearthisPlayerComponent],
  declarations: [HearthisPlayerComponent],
  providers: [HearthisPlayerService]
})
export class HearthisPlayerModule {
  constructor( @Optional() @SkipSelf() parentModule: HearthisPlayerModule) {
    throwIfAlreadyLoaded(parentModule, 'HearthisPlayerModule')
  }
}

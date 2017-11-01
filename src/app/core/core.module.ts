import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { HearthisPlayerModule } from './hearthis-player/hearthis-player.module';

const COMPONENTS = [NavComponent, NavBottomComponent];

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, HearthisPlayerModule, NgbModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, HearthisPlayerModule,
    COMPONENTS
  ],
  declarations: COMPONENTS,
  providers: [

  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

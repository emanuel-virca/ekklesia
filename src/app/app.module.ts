import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2'

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

import { CoreModule } from './core/core.module';
import { ResourcesService } from './resources/shared/resources.service';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ResourcesService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }

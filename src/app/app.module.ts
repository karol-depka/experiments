import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CheckFirebaseQueryComponent} from './check-firebase-query/check-firebase-query.component'
import {NgforParentComponent} from './ngfor-parent/ngfor-parent.component'
import {NgforTrackbyComponent} from './ngfor-trackby/ngfor-trackby.component'
import {RouterModule, Routes} from '@angular/router'
import {environment} from '../environments/environment'
import {AngularFireModule} from 'angularfire2';
import { CheckRoutingComponent } from './check-routing/check-routing.component'
import {AngularFireDatabaseModule} from 'angularfire2/database'


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile',
  },
  {
    path: 'check-queries',
    component: CheckFirebaseQueryComponent,
  },
  {
    path: 'trackBy',
    component: NgforParentComponent,
  }, {
    path: 'check-routing',
    component: CheckRoutingComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },

];

@NgModule({
  declarations: [
    AppComponent,
    CheckFirebaseQueryComponent,
    NgforParentComponent,
    NgforTrackbyComponent,
    CheckRoutingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

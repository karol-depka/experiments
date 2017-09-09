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
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { CheckFormsComponent } from './check-forms/check-forms.component';
import { NestedFormComponent } from './check-forms/nested-form/nested-form.component';
import { CustomFormComponentComponent } from './check-forms/nested-form/custom-form-component/custom-form-component.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectsComponent } from './selects/selects.component'


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
    path: 'check-forms',
    component: CheckFormsComponent,
  },
  {
    path: 'trackBy',
    component: NgforParentComponent,
  }, {
    path: 'check-routing',
    component: CheckRoutingComponent,
  }, {
    path: 'selects',
    component: SelectsComponent,
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
    CheckFormsComponent,
    NestedFormComponent,
    CustomFormComponentComponent,
    SelectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

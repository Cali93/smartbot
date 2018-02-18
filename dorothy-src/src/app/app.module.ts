import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService } from '@app/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent, PrivacyComponent } from '@app/components';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CookieComponent } from './components/cookie/cookie.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'privacy.html', component: PrivacyComponent},
  {path: 'cookie.html', component: CookieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    PrivacyComponent,
    HomeComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ParticlesModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

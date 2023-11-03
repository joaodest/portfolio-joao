import { HeaderComponent } from './components/general/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { GeneralModule } from './components/general/general.module';

import { AppRoutingModule } from './app-routing.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { HomeModule } from './components/home/home.module';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    HomeModule,
    GeneralModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin);
  }
}

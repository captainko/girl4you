import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from "jquery";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './home/models/models.component';
import { ServiceComponent } from './home/service/service.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './home/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ModelsComponent,
    ServiceComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

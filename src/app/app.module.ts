import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryComponentView } from './component/gallery/galleryViewMore.component';
import { TeamComponent } from './component/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    GalleryComponentView,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

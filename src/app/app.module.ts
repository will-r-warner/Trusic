import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeCityComponent } from "./components/home/home-city/home-city.component";
import { FooterIconComponent } from "./components/footer/footer-icon/footer-icon.component";
import { HomeFeaturedArtistsComponent } from './components/home/home-featured-artists/home-featured-artists.component';
import { HomeUpcomingShowsComponent } from './components/home/home-upcoming-shows/home-upcoming-shows.component';
import { HomeUpcomingShowCardComponent } from './components/home/home-upcoming-show-card/home-upcoming-show-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeCityComponent,
    FooterIconComponent,
    HomeFeaturedArtistsComponent,
    HomeUpcomingShowsComponent,
    HomeUpcomingShowCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CityComponent } from "./components/city/city.component";
import { CityNameComponent } from "./components/city/city-name/city-name.component";
import { FooterIconComponent } from "./components/footer/footer-icon/footer-icon.component";
import { CityFeaturedArtistsComponent } from "./components/city/city-featured-artists/city-featured-artists.component";
import { CityUpcomingShowsComponent } from "./components/city/city-upcoming-shows/city-upcoming-shows.component";
import { CityUpcomingShowCardComponent } from "./components/city/city-upcoming-show-card/city-upcoming-show-card.component";
import { LandingComponent } from "./components/landing/landing.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignUpPreferencesComponent } from "./components/sign-up-preferences/sign-up-preferences.component";
import { HomeComponent } from "./components/home/home.component";
import { HomePlaylistComponent } from "./components/home/home-playlist/home-playlist.component";
import { HomeArtistsComponent } from "./components/home/home-artists/home-artists.component";
import { HomeSightsComponent } from "./components/home/home-sights/home-sights.component";
import { environment } from "../environments/environment";
import { MapComponent } from './components/map/map.component';
import { MapLocationModalComponent } from './components/map/map-location-modal/map-location-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CityComponent,
    CityNameComponent,
    FooterIconComponent,
    CityFeaturedArtistsComponent,
    CityUpcomingShowsComponent,
    CityUpcomingShowCardComponent,
    LandingComponent,
    SignInComponent,
    SignUpComponent,
    SignUpPreferencesComponent,
    HomeComponent,
    HomePlaylistComponent,
    HomeArtistsComponent,
    HomeSightsComponent,
    MapComponent,
    MapLocationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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
    SignUpPreferencesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LandingComponent } from "./components/landing/landing.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SignUpPreferencesComponent } from "./components/sign-up-preferences/sign-up-preferences.component";
import { MapComponent } from "./components/map/map.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "signupPreferences", component: SignUpPreferencesComponent },
  { path: "home", component: HomeComponent },
  { path: "map", component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

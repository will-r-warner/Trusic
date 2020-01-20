import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./components/landing/landing.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "signin", component: LandingComponent },
  { path: "signup", component: LandingComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

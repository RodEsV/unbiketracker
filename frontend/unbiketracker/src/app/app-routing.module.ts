import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { MapComponent } from "./map/map/map.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map/:id', component: MapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

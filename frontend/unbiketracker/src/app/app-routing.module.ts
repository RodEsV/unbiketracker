import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { MapComponent } from "./map/map/map.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map/:id', component: MapComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

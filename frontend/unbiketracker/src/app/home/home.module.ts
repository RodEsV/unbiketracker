import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import {MdButtonModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [LoginComponent, SignupComponent, ForgotComponent]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    

  ]
})
export class UserModule { }

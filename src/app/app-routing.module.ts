import { ProtectedRout } from './guard/protectRout.guard';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'reset_password/:token', component: ResetPasswordComponent},
  {path: 'ops', component: ProtectedPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ResetPasswordService } from 'src/app/service/reset-password.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRout implements CanActivate {

  token;

  constructor(
    private router:Router,
    private resetPasswordService: ResetPasswordService) {
      this.token = location.pathname.replace("/reset_password/","");
    }

  async canActivate() {
    if(await lastValueFrom(this.resetPasswordService.tokenIsValid(this.token))){
      return true;
    } else {
      this.router.navigate(['ops']);
      return false;
    }
  }
}

import { IResetPassword } from './../interfaces/IResetPassword';
import { IMessageResponseToken } from './../interfaces/IMessageResponseResetToken';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITokenResetPassword } from '../interfaces/ITokenResetPassword';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
    private http: HttpClient
  ) { }

  getTokenResetPassword(token: string): Observable<ITokenResetPassword>{
    const url = `${environment.api}/resetPassword/findToken`;

    return this.http.get<ITokenResetPassword>(url, {params: new HttpParams().set('token', token)}).pipe(
      map(response => response)
    );
  }

  tokenIsValid(token: string): Observable<Boolean>{
    const url = `${environment.api}/resetPassword/tokenIsValid/${token}`;

    return this.http.get<Boolean>(url).pipe(
      map(response => response)
    );
  }

  resetPassword(resetPassowrd: IResetPassword): Observable<IMessageResponseToken>{
    const url = `${environment.api}/resetPassword/reset-password`;

   return this.http.post<IMessageResponseToken>(url, resetPassowrd).pipe(
      map(response => response)
    )
  }
}

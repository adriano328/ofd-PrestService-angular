import { IResetPassword } from './../../interfaces/IResetPassword';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ResetPasswordService } from 'src/app/service/reset-password.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparaValidator } from 'src/app/validators/compara-validator';
import { IError } from 'src/app/interfaces/IError';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [MessageService]
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordData: IResetPassword = {} as IResetPassword;
  form!: FormGroup;

  response_text_msg!: string;

  mensagens = {
    password: [
      { tipo: 'required', mensagem: 'Password é obrigatório' },
      { tipo: 'minlength', mensagem: 'O Password tem que conter ao menos 6 caracteres!' }],
    passwordConfirm: [
      { tipo: 'required', mensagem: 'Comfirma password é obrigatório' },
      { tipo: 'minlength', mensagem: 'Comfirma password tem que conter ao menos 6 caracteres!' },
      { tipo: 'comparacao', mensagem: 'Senhas não conferem' }],
  };

  constructor(
    private resetPassowrdService: ResetPasswordService,
    private formBuilder: FormBuilder,
    public messageService: MessageService
  ) {
    this.form = this.formBuilder.group({
      password: [''],
      passwordConfirm: ['']
    })
  }

  ngOnInit(): void {
  }

  async resetPassword() {
    this.response_text_msg = '';

    this.resetPasswordData.password = this.form.value.password;
    this.resetPasswordData.password_confirm = this.form.value.passwordConfirm;
    this.resetPasswordData.token = location.pathname.replace("/reset_password/", "");


    if (this.form.valid) {
      const data = await lastValueFrom(this.resetPassowrdService.resetPassword(this.resetPasswordData)).then(success => {
        this.response_text_msg = success.message;
      }).catch(error => {
        this.response_text_msg = error.message;
      });
    }
  }
}

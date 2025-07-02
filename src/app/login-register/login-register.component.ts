import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import LoginRegisterService from './services/login-register-service';
import Swal from 'sweetalert2';
import { SharedStateService } from '../shopping-cart/service/shopping-cart-service';


@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})

export class LoginRegisterComponent implements OnInit {

  fullname: string = '';
  email: string = '';
  password: string = '';
  document: string = '';
  birthDate: string = '';
  endDate: string = '';
  passwordConfirmation: string = '';
  secondaryPassword: string = '';
  
  constructor(private sharedState: SharedStateService) {}

  ngOnInit() {

  }

  async register() {
    const requiredFields = [
      this.fullname,
      this.email,
      this.document,
      this.birthDate,
      this.password,
      this.passwordConfirmation,
      this.secondaryPassword
    ];

    const hasEmptyFields = requiredFields.some(this.isEmptyAny); 

    if (hasEmptyFields) {
      this.showWarningAlert('É necessário preencher todos os campos.');
      return;
    }

     if (this.password !== this.passwordConfirmation) {
      this.showErrorAlert('Senhas não são iguais.');
      return;
    }

    try {
      const response = await LoginRegisterService.register(
        this.fullname,
        this.email,
        this.document,
        this.birthDate,
        this.password,
        this.passwordConfirmation,
        this.secondaryPassword
      );

       this.showSuccessAlert('', 'Cadastro realizado com sucesso.');

    } catch (error) {
      this.showErrorAlert('Erro ao processar seu cadastro. Por favor, verifique os dados e tente novamente');    
    }  
  }

  async login() {
    try {
      if (!this.email?.trim() || !this.password?.trim()) {
        this.showWarningAlert('E-mail e senha são obrigatórios.');
        return;
      }

      const response = await LoginRegisterService.login(
        this.email,
        this.password
      );

      this.sharedState.setLogin(true);
      this.showSuccessAlert('', 'Login realizado com sucesso!');

    } catch (error) {   
      this.showErrorAlert('Login ou senha incorretos.');    
    }
  }

  isEmptyAny(value: any): boolean {
    if (typeof value === 'string') return !value.trim();
    return value == null;
  }

  showErrorAlert(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Atenção',
      text: message,
    });
  }

  showWarningAlert(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Atenção',
      text: message,
    });
  }

  showSuccessAlert(title: string, message: string) {
     Swal.fire({
       icon: 'success',
       title: title,
       text: message,
     });
  }

}

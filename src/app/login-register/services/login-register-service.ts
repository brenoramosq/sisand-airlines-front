import { Injectable } from '@angular/core';
import httpService from '../../../config/http-service';

@Injectable({providedIn: 'root'})
export class LoginRegisterService {


  public async login(email: string, password: string) {       
    const body = {
       email,
       password
    };

    const response = await httpService.post(`v1/customer/login`, body);

    return response;
  }
  
  public async register(fullName: string, email: string, document: string, dateOfBirth: string, password: string, passwordConfirmation: string, secondaryPassword: string) {
     const body = {
        fullName,
        email,
        document,
        dateOfBirth,
        password,
        passwordConfirmation,
        secondaryPassword
     };

     const response = await httpService.post(`v1/customer/register`, body);
     return response;
  }
}

export default new LoginRegisterService();
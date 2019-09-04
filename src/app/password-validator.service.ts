import { Injectable } from '@angular/core';

@Injectable()
export class PasswordValidatorService {

  constructor() { }


  // Validacion media excesiva, seria ideal refactorizar:
    // const upperCase = password.match('.*[A-Z].*')
    // const lowerCase = password.match('.*[a-z].*')
    // O tambien refactorizar en tres metodos y que quede:
    // validate(pass: string){
    // return checkLngth(pass) &&
    //        checkUpperCase(pass) &&
    //        checkLowerCase(pass);
    //}

    // Para correr el test:
    //   $ ng test 
  validate(password: string){
    if(password.length < 8){
      return false
    }
    return password.match('.*[A-Z].*') !== null && password.match('.*[a-z].*') !== null 
  }

}
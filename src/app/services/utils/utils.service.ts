import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  get token(): string | null {
    const tokenExist = localStorage.getItem('token');
    return tokenExist;
  }

  get email(): string | null {
    const emailExist = localStorage.getItem('email');
    return emailExist;
  }

  constructor() {}

  expRegular(exp: string): RegExp {
    const exps: any = {
      email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      number: /^\d+$/,
      letter: /^[a-zA-ZÁÉÍÓÚáéíóú ]+$/,
      year: /^(?!0000)\d{4}$/,
    };

    return exps[exp];
  }
}

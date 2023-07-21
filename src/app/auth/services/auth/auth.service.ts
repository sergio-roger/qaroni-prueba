import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Auth, AuthResponse } from './auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = '';

  constructor(private http: HttpClient) {
    this.url = environment.API;
  }

  login(auth: Auth): Observable<AuthResponse> {
    const endpoint: string = this.url + '/merchants/71/users/logins';
    return this.http.post<AuthResponse>(endpoint, auth);
  }
}

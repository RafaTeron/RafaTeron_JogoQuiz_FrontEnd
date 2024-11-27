import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  token: string;
  playerId: number;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = 'https://deploy-gateway-service-production.up.railway.app/auth/login';

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<LoginResponse> {
    const body = { usuario: usuario, password };

    console.log('Login request body:', body);

    return this.http.post<LoginResponse>(this.API_URL, body).pipe(
      tap(response => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('playerId', response.playerId.toString());
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}

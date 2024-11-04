import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly API_URL = 'http://localhost:8765/auth/login'; // Ajuste o URL conforme necessário

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<LoginResponse> {
    const body = { usuario: usuario, password };

    console.log('Login request body:', body); // Adicione esta linha

    return this.http.post<LoginResponse>(this.API_URL, body).pipe(
      tap(response => {
        localStorage.setItem('authToken', response.token); // Salva o token no localStorage
      })
    );
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Método para realizar logout e remover o token
  logout(): void {
    localStorage.removeItem('authToken');
  }
}

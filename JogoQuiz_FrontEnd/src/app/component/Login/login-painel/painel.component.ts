import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/Login/login.service';

@Component({
  selector: 'app-login-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class LoginPainelComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    console.log('Attempting to login with:', this.usuario, this.senha); // Adicione esta linha

    this.loginService.login(this.usuario, this.senha).subscribe({
      next: () => this.router.navigate(['/Quiz']),
      error: () => alert('Login falhou, verifique suas credenciais')
    });
  }
}

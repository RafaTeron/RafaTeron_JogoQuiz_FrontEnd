import { Component } from '@angular/core';
import { Player } from '../../../model/player';
import { Role } from '../../../model/enum/role';
import { PlayerService } from '../../../service/Player/player.service';


@Component({
  selector: 'app-register-painel',
  templateUrl: './register-painel.component.html',
  styleUrls: ['./register-painel.component.css']
})
export class RegisterPainelComponent {

  player: Player = {
    id: 0,
    name: '',
    usuario: '',
    password: '',
    pointScore: 0,
    question: [],
    questionRespondidas: [],
    roles: Role.USER
  };

  senhaRepeat: string = '';
  passwordMismatch: boolean = false;

  constructor(private playerService: PlayerService) { }

  isPasswordMatch(): boolean {
    return this.player.password === this.senhaRepeat;
  }

  registerPlayer() {
    console.log('Attempting to register with:', this.player.usuario, this.player.password);

    if (!this.requisitosUsuarioForm()) {
      return;
    }

    if (!this.requisitosPasswordForm()) {
      return;
    }

    if (this.isPasswordMatch()) {
      this.passwordMismatch = false;
      this.playerService.register(this.player).subscribe({
        next: (response) => {
          if (response) {
            location.reload();
            alert('Registro concluído com sucesso!');
          }
        },
        error: (error) => {
          if (error.status === 400) {
            alert('Usuário já existe!');
          } else {
            alert('Erro inesperado ao tentar registrar');
          }
        }
      });
    } else {
      this.passwordMismatch = true;
      alert('As senhas não coincidem!');
    }
  }

  requisitosUsuarioForm(): boolean {
    if (!this.player.usuario || this.player.usuario.length < 4) {
      alert('O nome de usuário precisa ter pelo menos 4 caracteres.');
      return false;
    }
    return true;
  }

  requisitosPasswordForm(): boolean {
    if (!this.player.password || this.player.password.length < 6) {
      alert('A senha precisa ter pelo menos 6 caracteres.');
      return false;
    }
    return true;

  }
}

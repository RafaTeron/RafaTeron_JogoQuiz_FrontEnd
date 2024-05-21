import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../model/player';
import { PlayerService } from '../../../service/Player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-painel',
  templateUrl: './finish-painel.component.html',
  styleUrl: './finish-painel.component.css'
})
export class FinishPainelComponent implements OnInit {

  id: number;
  selectedOption!: number;
  playerFindById: Observable<Player>;
  timeoutId: any;
  answerColors: { [key: number]: string } = {};

  constructor(private playerService: PlayerService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    this.id = 1;
    this.playerFindById = this.playerService.findById(this.id);
  }

  ngOnInit(): void {
  }

  novoJogo() {
    this.playerService.resetQuizPlayer(this.id).subscribe({
      next: () => {
        this.playerGerarQuestion();
        this.retornarQuiz();
      },
      error: error => {
        console.error('Ocorreu um erro ao resetar:', error);
        alert('Erro ao resetar.');
      }
    });
  }

  playerGerarQuestion() {
    this.playerService.gerarQuetion(this.id).subscribe({
      next: () => {
      },
      error: error => {
        console.error('Ocorreu um erro ao conferir a resposta:', error);
        alert('Erro ao gerar a pergunta.');
      }
    });
  }

  retornarQuiz() {
    this.router.navigate(['/Quiz']);
  }


}

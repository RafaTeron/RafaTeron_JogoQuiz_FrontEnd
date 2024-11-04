import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../model/player';
import { PlayerService } from '../../../service/Player/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-topo',
  templateUrl: './quiz-topo.component.html',
  styleUrl: './quiz-topo.component.css'
})
export class QuizTopoComponent implements OnInit {

  id: number;
  playerFindById: Observable<Player>;

  atualHP: number = 100;

  constructor(private playerService: PlayerService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    this.id = 1;
    this.playerFindById = this.playerService.findById(this.id);
  }

  ngOnInit(): void {
  }

  novoJogo() {
    this.atualHP = 100;
    localStorage.setItem('atualHP', String(this.atualHP));
    this.changeDetectorRef.detectChanges();

    this.playerService.resetQuizPlayer(this.id).subscribe({
      next: () => {
        this.playerGerarQuestion();
        this.retornarQuiz();
        window.location.reload();
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

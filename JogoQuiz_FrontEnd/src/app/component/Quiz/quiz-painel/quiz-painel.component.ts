import { PlayerService } from './../../../service/Player/player.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../../model/player';

@Component({
  selector: 'app-quiz-painel',
  templateUrl: './quiz-painel.component.html',
  styleUrl: './quiz-painel.component.css'
})
export class QuizPainelComponent implements OnInit {

  id: number;
  selectedOption!: number;
  playerFindById: Observable<Player>;
  timeoutId: any
  answerColors: { [key: number]: string } = {};


  constructor(private playerService: PlayerService, private changeDetectorRef: ChangeDetectorRef) {
    this.id = 6;
    this.playerFindById = this.playerService.findById(this.id);
  }

  ngOnInit(): void {
  }


  checkAnswer() {
    if (this.selectedOption !== null) {
      this.playerService.conferirResposta(this.id, this.selectedOption).subscribe({
        next: resposta => {
          const color = resposta ? 'correct-answer' : 'wrong-answer';
          this.answerColors[this.selectedOption] = color;

          if (resposta) {
            alert('Resposta correta!');
          } else {
            alert('Resposta errada!');
          }
          this.playerGerarQuestion();

          this.timeoutId = setTimeout(() => {
            this.atualizarQuestion();
          }, 5000);
        },
        error: error => {
          console.error('Ocorreu um erro ao conferir a resposta:', error);
        }
      });
    } else {
      alert('Selecione uma opção antes de conferir a resposta.');
    }
  }

  playerGerarQuestion() {
    this.playerService.gerarQuetion(this.id).subscribe({
      next: () => {
        alert('Pergunta gerada com sucesso!');
      },
      error: error => {
        console.error('Ocorreu um erro ao conferir a resposta:', error);
        alert('Erro ao gerar a pergunta.');
      }
    });
  }

  atualizarQuestion() {
    this.playerFindById = this.playerService.findById(this.id);
    this.changeDetectorRef.detectChanges();
  }

  proximo() {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId);
    }

    this.atualizarQuestion();
  }


  getAnswerColor(answerId: number): string {
    return this.answerColors[answerId] || '';
  }

}

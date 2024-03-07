import { PlayerService } from './../../../service/Player/player.service';
import { Component } from '@angular/core';
import { Question } from '../../../model/question';
import { QuestionService } from '../../../service/Question/question.service';
import { Observable } from 'rxjs';
import { Player } from '../../../model/player';

@Component({
  selector: 'app-quiz-painel',
  templateUrl: './quiz-painel.component.html',
  styleUrl: './quiz-painel.component.css'
})
export class QuizPainelComponent {

  id: number;
  selectedOption: number | undefined;

  //questionFindAll: Observable<Question[]>;
  //questionFindById: Observable<Question>;

  playerFindById: Observable<Player>;

  constructor(private playerService: PlayerService) {
    this.id = 6;

    //this.questionFindAll = this.questionService.findAll();
    //this.questionFindById = this.questionService.findById(this.id);

    this.playerFindById = this.playerService.findById(this.id);

  }

  checkAnswer() {
    if (this.selectedOption !== undefined) {
      this.playerService.conferirResposta(this.id, this.selectedOption).subscribe({
        next: resposta => {
          if (resposta) {
            alert('Resposta correta!');
          } else {
            alert('Resposta errada!');
          }
        },
        error: error => {
          console.error('Ocorreu um erro ao conferir a resposta:', error);
        }
      });
    } else {
      alert('Selecione uma opção antes de conferir a resposta.');
    }
  }

}

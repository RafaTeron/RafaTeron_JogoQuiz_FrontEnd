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
  //questionFindAll: Observable<Question[]>;
  //questionFindById: Observable<Question>;

  playerFindById: Observable<Player>;

  constructor(private playerService: PlayerService) {
    this.id = 6;
    //this.questionFindAll = this.questionService.findAll();
    //this.questionFindById = this.questionService.findById(this.id);

    this.playerFindById = this.playerService.findById(this.id);
  }

}

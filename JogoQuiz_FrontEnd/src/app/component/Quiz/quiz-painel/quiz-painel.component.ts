import { Component } from '@angular/core';
import { Question } from '../../../model/question';
import { QuestionService } from '../../../service/Question/question.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-quiz-painel',
  templateUrl: './quiz-painel.component.html',
  styleUrl: './quiz-painel.component.css'
})
export class QuizPainelComponent {

  id: number;
  questionFindAll: Observable<Question[]>;
  questionFindById: Observable<Question>;

  constructor(private questionService: QuestionService) {
    this.id = 2;
    this.questionFindAll = this.questionService.findAll();
    this.questionFindById = this.questionService.findById(this.id);
  }

}

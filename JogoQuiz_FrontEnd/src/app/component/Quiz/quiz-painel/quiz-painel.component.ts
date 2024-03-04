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

  questions: Observable<Question[]>;

  constructor(private questionService: QuestionService){
    this.questions = this.questionService.findAll();
  }

}

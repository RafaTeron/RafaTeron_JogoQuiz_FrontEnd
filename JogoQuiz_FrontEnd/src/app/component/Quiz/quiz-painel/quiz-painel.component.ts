import { Component } from '@angular/core';
import { Question } from '../../../model/question';
import { QuestionService } from '../../../service/Question/question.service';
import { Answer } from '../../../model/answer';

@Component({
  selector: 'app-quiz-painel',
  templateUrl: './quiz-painel.component.html',
  styleUrl: './quiz-painel.component.css'
})
export class QuizPainelComponent {

  questions: Question[] = [];

  constructor(private questionService: QuestionService){
    this.questions = this.questionService.list();
  }

}

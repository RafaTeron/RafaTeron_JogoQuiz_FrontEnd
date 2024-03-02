import { Component } from '@angular/core';
import { Question } from '../../../model/question';
import { QuestionService } from '../../../service/Question/question.service';

@Component({
  selector: 'app-quiz-topo',
  templateUrl: './quiz-topo.component.html',
  styleUrl: './quiz-topo.component.css'
})
export class QuizTopoComponent {

  questions: Question[] = [];


  constructor(private questionService: QuestionService){
    this.questions = this.questionService.list();
  }
}

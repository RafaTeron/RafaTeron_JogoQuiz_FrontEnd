import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { Category } from '../../model/enum/category'; // Certifique-se de que o caminho esteja correto
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly API = '/assets/question.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Question[]>(this.API)
    .pipe(
      first(),
      tap(questions => console.log(questions))
    );
  }
}

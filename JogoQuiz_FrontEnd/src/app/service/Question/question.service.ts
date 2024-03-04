import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../model/question';

import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly API = '/assets/question.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Question[]>(this.API)
      .pipe(
        first(),
        delay(2000),
        tap(questions => console.log(questions))
      );
  }
}

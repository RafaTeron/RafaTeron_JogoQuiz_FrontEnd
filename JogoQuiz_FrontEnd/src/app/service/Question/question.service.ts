import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../model/question';

import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly API = 'quiz/question';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Question[]>(this.API)
      .pipe(
        first(),
        tap(questions => console.log(questions))
      );
  }

  findById(id: number) {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Question>(url);
  }
}

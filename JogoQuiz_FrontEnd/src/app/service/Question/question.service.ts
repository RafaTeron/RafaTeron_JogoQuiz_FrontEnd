import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../../model/question';
import { Answer } from '../../model/answer';
import { Category } from '../../model/enum/category'; // Certifique-se de que o caminho esteja correto

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) {}

  list(): Question[] {
    // Definindo a categoria
    const category: Category = Category.CIENCIA;

    // Criando respostas
    const answers: Answer[] = [
      {
        id: 1,
        answerText: "A) Oxigênio",
        isCorrect: true
      },
      {
        id: 2,
        answerText: "B) Silício",
        isCorrect: false
      },
      {
        id: 3,
        answerText: "C) Ferro",
        isCorrect: false
      }
    ];

    // Associando a pergunta às respostas
    const question: Question = {
      id: 1,
      questionText: 'Qual é o elemento mais abundante na crosta terrestre?',
      playersList: [],
      answers: answers,
      category: category
    };

    // Preenchendo a propriedade 'question' em cada resposta
    answers.forEach(answer => {
      answer.question = question;
    });

    return [question];
  }
}

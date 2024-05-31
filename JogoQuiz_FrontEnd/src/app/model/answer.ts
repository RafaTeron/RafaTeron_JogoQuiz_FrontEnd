import { Question } from "./question";

export interface Answer {
  id: number;
  answerText: string;
  descricao: string;
  isCorrect: boolean;

  question?: Question;
}

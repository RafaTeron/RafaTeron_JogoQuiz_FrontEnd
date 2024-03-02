import { Question } from "./question";

export interface Player {
  id: number;
  name: string;
  pointScore: number;
  question: Question[];
  questionRespondidas: string[];
}

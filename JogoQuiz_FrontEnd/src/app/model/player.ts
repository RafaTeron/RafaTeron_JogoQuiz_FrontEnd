import { Question } from "./question";

export interface Player {
  id: number;
  name: string;
  usuario: string;
  password: string;
  pointScore: number;
  question: Question[];
  questionRespondidas: string[];
}

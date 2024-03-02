import { Answer } from './answer';
import { Category } from './enum/category';
import { Player } from "./player";

export interface Question {

  id: number;
  questionText: string;
  player?: Player;

  playersList: Player[];
  answers: Answer[];

  category: Category;
}

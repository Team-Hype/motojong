import { Mahjong, EmptyMahjong } from './mahjongs/Mahjong';

export class Level {
  id: number;
  difficulty: number;
  board: Mahjong[][][];
  background: string;

  constructor(id: number, difficulty: number, board: Mahjong[][][], background: string) {
    this.id = id;
    this.difficulty = difficulty;
    this.background = background;
    this.board = board;
  }
}

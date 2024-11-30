import { Mahjong, EmptyMahjong } from './mahjongs/Mahjong';

export class Level {
  id: number;
  size: { x: number; y: number; layers: number };
  difficulty: number;
  board: (Mahjong | null)[][][];
  background: string;

  constructor(id: number, difficulty: number, board: (Mahjong|null)[][][], background: string) {
    this.id = id;
    this.size = { x: board[0][0].length, y: board[0].length, layers: board.length };
    this.difficulty = difficulty;
    this.background = background;
    this.board = board;
  }
}

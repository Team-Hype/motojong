import { Level } from "../Level";
import { BMWHexagon, BMWLogo } from "../mahjongs/BMWSample";
import { EmptyMahjong } from "../mahjongs/Mahjong";

export class TestLevel extends Level {
  id: number;
  difficulty: number;
  board: EmptyMahjong[][][];
  background: string;

  constructor() {
    // Define properties before calling `super`
    const id = 1;
    const difficulty = 1;

    // Example board layout with 1 layer, 3x3 grid
    const board = [
      [
        [new EmptyMahjong(), new EmptyMahjong(), new EmptyMahjong()],
        [new BMWHexagon(), new EmptyMahjong(), new EmptyMahjong()],
        [new EmptyMahjong(), new BMWLogo(), new EmptyMahjong()],
      ],
    ];

    const background = "test";

    // Call parent constructor
    super(id, difficulty, board, background);

    // Initialize properties
    this.id = id;
    this.difficulty = difficulty;
    this.board = board;
    this.background = background;
  }
}

import { Level } from "../Level";
import { BMWHexagon, BMWLogo } from "../mahjongs/BMWSample";
import { EmptyMahjong } from "../mahjongs/Mahjong";

export class TestLevel extends Level {

  constructor() {
    // Define properties before calling `super`
    const id = 1;
    const difficulty = 1;

    // Example board layout with 1 layer, 3x3 grid
    const board = [
      [
        // [new VoidMahjong(), new EmptyMahjong(), new EmptyMahjong()],
        [new BMWHexagon(), new EmptyMahjong(), new EmptyMahjong()],
        [new EmptyMahjong(), new BMWLogo(), new EmptyMahjong()],
        [new EmptyMahjong(),null, new EmptyMahjong(),null, new EmptyMahjong(),null],
        [null,null,null,null,null,null],
        [new EmptyMahjong(),null, new EmptyMahjong(),null, new EmptyMahjong(),null],
        [null,null,null,null,null,null],
        [new EmptyMahjong(),null, new EmptyMahjong(),null, new EmptyMahjong(),null],
        [null,null,null,null,null,null],
      ],
      [
        // [new VoidMahjong(), new EmptyMahjong()],
        [new BMWHexagon(), new EmptyMahjong()],
      ],
    ];

    const background = "test";

    // Call parent constructor
    super(id, difficulty, board, background, 'logo192.png', ['jopa', 'penis', 'siski']);
    }
}

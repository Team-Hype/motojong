import { Level } from "../Level";
import { BMWSample} from "../mahjongs/BMWSample";
import { EmptyMahjong } from "../mahjongs/Mahjong";


export class BMWLevel extends Level{
    constructor(){
        const id= 2;
        const difficulty = 1;
        const board = [
            [
                [BMWSample[1], null, BMWSample[1], null, BMWSample[3],null,BMWSample[4],null,BMWSample[0],null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [BMWSample[2], null, BMWSample[2], null, BMWSample[3],null,BMWSample[4],null,BMWSample[0],null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, BMWSample[5], null, BMWSample[5],null,BMWSample[4],null,BMWSample[4],null,null],
                [null, null, null, null, null,null,null,null,null,null,],

            ],
            [   [null,null,null,null,null,null,null,null,null,null,],
                [null, BMWSample[4],null,BMWSample[4],null,BMWSample[3],null,BMWSample[3],null,null,],
                [null,null,null,null,null,null,null,null,null,null,],
                [null,null, BMWSample[5], null, BMWSample[5],null,BMWSample[4],null,BMWSample[4],null],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
            ],
            [
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, BMWSample[0], null, BMWSample[0],null,BMWSample[2],null,BMWSample[2],null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
                [null, null, null, null, null,null,null,null,null,null,],
            ]
        ];
        const background = "bmw";
        super(id, difficulty, board, background);
    }   
}
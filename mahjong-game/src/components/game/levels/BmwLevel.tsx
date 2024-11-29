import { Level } from "../Level";
import { BMWSample} from "../mahjongs/BMWSample";
import { EmptyMahjong } from "../mahjongs/Mahjong";


export class BMWLevel extends Level{
    constructor(){
        const id= 2;
        const difficulty = 1;
        const board = [
            [
                [BMWSample[1], BMWSample[2], BMWSample[3], BMWSample[4], BMWSample[3]],
                [BMWSample[0], BMWSample[0], BMWSample[0], BMWSample[0], BMWSample[4]],
                [new EmptyMahjong(), BMWSample[1],BMWSample[1], new EmptyMahjong(), new EmptyMahjong()],
            ],
            [
                [BMWSample[5],BMWSample[5],BMWSample[0],BMWSample[0]],
                [BMWSample[5],BMWSample[5],BMWSample[0],BMWSample[0]],
                
            ]
        ];
        const background = "bmw";
        super(id, difficulty, board, background);
    }   
}
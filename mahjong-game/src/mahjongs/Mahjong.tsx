type Point = {
  x: number;
  y: number;
  z: number;
};

type Mahjong = {
  state: string;
  image: string;
//   cords: Point;
};
export class EmptyMahjong implements Mahjong {
  state: string;
  image = "mahjong.png";

  constructor() {
    this.state = "empty";
  } 
}
export type { Mahjong, Point};


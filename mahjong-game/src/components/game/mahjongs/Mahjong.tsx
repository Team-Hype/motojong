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
  state = "avaliable";
  image = "mahjong.png";

}
export type { Mahjong, Point};


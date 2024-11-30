type Point = {
  x: number;
  y: number;
  z: number;
};

enum State {
  Available = "available",
  Selected = "selected",
  Blocked = "blocked"
}

type Mahjong = {
  // state: State;
  image: string;
  // cords?: Point; // Optional if not all Mahjong objects require coordinates
};

class EmptyMahjong implements Mahjong {
  state: State = State.Available;
  image: string = "mahjong.png";
}

class VoidMahjong implements Mahjong {
  state: State = State.Available;
  image: string = "";
}

export type { Mahjong, Point };
export { State, VoidMahjong, EmptyMahjong };


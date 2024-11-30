import {Mahjong, State} from "./Mahjong";

export class AtomLogoGray implements Mahjong {
    state: State = State.Available;
    image = "atom/Atom-logo-grayscale.png";
}

export class AtomLogoBlue implements Mahjong{
    state: State = State.Available;
    image = "atom/Atom-logo-blue.png";
}
export class AtomCarFront implements Mahjong{
    state: State  = State.Available;
    image = "atom/Atom-car-front.png";
}

export class AtomCarBack implements Mahjong{
    state: State  = State.Available;
    image = "atom/Atom-car-back.png";
}
export class AtomCarBack2 implements Mahjong{
    state: State  = State.Available;
    image = "atom/Atom-Car-semiback.png";
}
export class AtomCar implements Mahjong{
    state: State  = State.Available;
    image = "atom/Atom-car.png";
}


export const BMWSample : Mahjong[] = [
    new AtomLogoGray(),
    new AtomLogoBlue(),
    new AtomCarFront(),
    new AtomCarBack(),
    new AtomCarBack2(),
    new AtomCar()
]
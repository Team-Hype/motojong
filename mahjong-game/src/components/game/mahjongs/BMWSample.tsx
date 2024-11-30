import {Mahjong, State} from "./Mahjong";

export class BMWHexagon implements Mahjong {
    state: State = State.Available;
    image = "bmw/BMW-hexagon.png";
}

export class BMWLogo implements Mahjong{
    state: State = State.Available;
    image = "bmw/BMW-logo.png";
}
export class BMWM3 implements Mahjong{
    state: State  = State.Available;
    image = "bmw/BMW-m3_car.png";
}

export class BMWM4 implements Mahjong{
    state: State  = State.Available;
    image = "bmw/BMW-m4-car.png";
}
export class BMWX implements Mahjong{
    state: State  = State.Available;
    image = "bmw/BMW-x-car.png";
}
export class BMWBlackCar implements Mahjong{
    state: State  = State.Available;
    image = "bmw/BMW-black-car.png";
}


export const BMWSample : Mahjong[] = [
    new BMWHexagon(),
    new BMWLogo(),
    new BMWM3(),
    new BMWM4(),
    new BMWX(),
    new BMWBlackCar()
]
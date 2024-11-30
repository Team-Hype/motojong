
import { Mahjong } from "./Mahjong";

export class ToyotaCloudsLogo implements Mahjong {
    state = "avaliable";
    image = "toyota/Toyota-clouds.png";
}
export class ToyotaLogo implements Mahjong {
    state = "avaliable";
    image = "toyota/Toyota-logo.png";
}
export class ToyotaSportCar implements Mahjong {
    state = "avaliable";
    image = "toyota/Toyota-supercar.png";
}
export class ToyotaSupra implements Mahjong {
    state = "avaliable";
    image = "toytota/Toyota-sypra.png";
}
export class ToyotaBus implements Mahjong {
    state = "avaliable";
    image = "toyota/Toyota-bus.png";
}
export class ToyotaSemiBlackCar implements Mahjong {
    state = "avaliable";
    image = "toyota/Toyota-semiblack.png";
}




export const ToyotaSample : Mahjong[] = [
    new ToyotaCloudsLogo(),
    new ToyotaLogo(),
    new ToyotaSportCar(),
    new ToyotaSupra(),
    new ToyotaBus(),
    new ToyotaSemiBlackCar()
]
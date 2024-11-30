import { OperationCanceledException } from "typescript";
import { generate } from "../../../grid-generation";
import { Level } from "../Level";
import { Mahjong } from "../mahjongs/Mahjong";


export class GeneratedLevel extends Level{
    constructor(images: string[], pairsCount: number, rows: number, cols: number, layersCount: number){
        const id = 3;
        const difficulty = 2;

        const pairsPerImage = Math.floor(pairsCount / images.length)
        const pairsForFirstImage = pairsCount - (images.length - 1) * pairsPerImage

        const imagesQueue: string[] = Array(2 * pairsCount)

        for (let i = 0; i < pairsForFirstImage; i++) {
            imagesQueue[i] = images[0]
            imagesQueue[2 * pairsCount - i - 1] = images[0]
        }

        for (let j = 0; j < images.length - 1; j++)
        for (let i = 0; i < pairsPerImage; i++) {
            imagesQueue[pairsForFirstImage + j * pairsPerImage + i] = images[j + 1]
            imagesQueue[2 * pairsCount - (pairsForFirstImage + j * pairsPerImage + i) - 1] = images[j + 1]
        }

        shuffle(imagesQueue)
        const board: (Mahjong | null)[][][] = generate(rows, cols, layersCount, pairsCount)
            .map(layer => layer.map(row => row.map(majhongIsThere => {
                if (!majhongIsThere)
                    return null

                const image = imagesQueue.pop()
                if (image === undefined)
                    // return { state: "state", image: images[0] }
                    throw new OperationCanceledException()

                return { state: "state", image }
            }))
        )

        const background = "bmwww";
        super(id, difficulty, board, background, "logo192.png", []);
    }
}

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
    }

    return array;
};

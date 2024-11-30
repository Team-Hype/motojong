import { OperationCanceledException } from "typescript";

export class Level {
    id: number;
    size: { x: number; y: number; layers: number };
    difficulty: number;
    board: (string | null)[][][];
    background: string;
    cells: number
    picture: string;
    facts: string[];

    constructor(id: number, difficulty: number, board: (string | null)[][][], background: string, picture: string, facts: string[]) {
        this.id = id;
        this.size = {x: board[0][0].length, y: board[0].length, layers: board.length};
        this.difficulty = difficulty;
        this.background = background;
        this.board = board;
        this.cells = this.count_init_cells()
        this.picture = picture;
        this.facts = facts;
    }

    count_init_cells() {
        // Initialize counter for non-null Mahjongs
        let count = 0;

        // Iterate through all layers, rows, and columns
        for (let z = 0; z < this.size.layers; z++) {
            for (let y = 0; y < this.size.y; y++) {
                for (let x = 0; x < this.size.x; x++) {
                    if (this.board[z][y][x] !== null) {
                        count++; // Increment count for non-null Mahjongs
                    }
                }
            }
        }

        return count; // Return the total count
    }

    reshuffle() {
        let images = this.board.flat().flat().filter(x => x !== null)
        let boardSceleton = this.board.map(layer => layer.map(row => row.map(x => x !== null)))

        shuffle(images)
        this.board = boardSceleton
            .map(layer => layer.map(row => row.map(majhongIsThere => {
                if (!majhongIsThere)
                    return null

                const image = images.pop()
                if (image === undefined)
                    throw new OperationCanceledException()

                return image
            }))
        )
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

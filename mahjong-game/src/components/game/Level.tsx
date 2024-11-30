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
}


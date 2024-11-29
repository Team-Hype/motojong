// main.js
import {Board} from "./board";

"./tile"; // Предполагается, что есть класс Tile

// Настройки игры
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let matchedTiles = 0;
let tiles = [];

// Загружаем изображения
function preload() {
    this.load.image('tile-back', 'src/assets/mahjong.png'); // Оборот плитки
    this.load.image('lamba', 'src/assets/LAMBORGHINI.jpg');
}


function drawBoard(scene, board) {
    for (let z = 0; z < board.board.length; z++) {
        for ( let y = 0; y < board.board[z].length; y++) {
            for ( let x = 0; x < board.board[z][y].length; x++) {
                board.drawTile(scene, x, y, z);
                drawTile(scene, x, y, z);
            }
        }
    }
}

function create() {
    const tileWidth = 100;
    const tileHeight = 140;
    const delta = 10;
    const rows = 4;
    const cols = 4;

    const board = new Board();
    board.create_tile(0, 0,0, 'lamba', 'lamba');

    drawBoard(this, board);

    // const tileImages = [
    //     'lamba', 'lamba', 'image3', 'image4',
    //     'image5', 'image6', 'image7', 'image8',
    //     'image1', 'image2', 'image3', 'image4',
    //     'image5', 'image6', 'image7', 'image8'
    // ];
    //
    // Phaser.Utils.Array.Shuffle(tileImages);

}

function update() {
    // Логика игры
}

// main.js
import {Tile, drawTile} from "./tile";

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

function draw_tile(tile) {

}

function create() {
    const tileWidth = 100;
    const tileHeight = 140;
    const rows = 4;
    const cols = 4;

    const tileImages = [
        'lamba', 'lamba', 'image3', 'image4',
        'image5', 'image6', 'image7', 'image8',
        'image1', 'image2', 'image3', 'image4',
        'image5', 'image6', 'image7', 'image8'
    ];

    Phaser.Utils.Array.Shuffle(tileImages);

    tiles = []; // Array to hold all Tile objects

    // Create a grid of tiles
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * tileWidth + 150;
            const y = row * tileHeight + 100;
            const imageType = tileImages[row * cols + col];
            const tile = new Tile(x, y, 0, 'free', imageType);
            tiles.push(tile);
            drawTile(this, tile, tileWidth, tileHeight);
        }
    }
}

function update() {
    // Логика игры
}

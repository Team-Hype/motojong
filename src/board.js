import {Tile} from "./tile";

class Board {
    constructor() {
        this.board = []; // Инициализируем 3D массив размером 3x10x10
        for (let z = 0; z < 3; z++) {
            this.board[z] = []; // Инициализируем двумерный массив на уровне z
            for (let y = 0; y < 10; y++) {
                this.board[z][y] = []; // Инициализируем одномерный массив на уровне y
                for (let x = 0; x < 10; x++) {
                    this.create_tile(x, y, z); // Создаем плитку
                }
            }
        }
        this.matchedTiles = 0;
        this.selectedTile = null;
    }

    create_tile(x, y, z, data, image) {
        const tile = new Tile(x, y, z, 'free', data, image);
        this.board[z][y][x] = tile;
    }

    drawTile(scene, x, y, z) {

        const tile = this.board[z][y][x];
        const scene_x = x * 150 + 200;
        const scene_y = y * 150 + 200;

        // Создаем спрайт плитки
        tile.sprite = scene.add.sprite(scene_x, scene_y, 'tile-back')
            .setInteractive()
            .setDisplaySize(100, 200);

        if (tile.image) {
            tile.spriteImage = scene.add.sprite(scene_x, scene_y, tile.image)  // tile.data содержит название изображения
                .setOrigin(0.5, 0.5) // Центрируем изображение
                .setDisplaySize(60, 120);  // Уменьшаем размер изображения, чтобы оно поместилось по центру
        }

        // Проверяем, что tile.sprite существует перед добавлением обработчика событий
        if (tile.sprite) {
            tile.sprite.on('pointerdown', () => {
                if (tile.sprite) {
                    tile.onTileClick(tile, this.selectedTile, this.matchedTiles); // Исправлено: передаем tile, а не scene
                } else {
                    console.error('Tile sprite is not initialized');
                }
            });
        } else {
            console.error('Failed to create tile sprite');
        }
    }

}

export {Board};

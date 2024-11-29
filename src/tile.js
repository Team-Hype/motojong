class Tile {
    constructor(x, y, z, state = 'free', data) {
        this.x = x; // Координата X
        this.y = y; // Координата Y
        this.z = z; // Координата Z
        this.width = 2; // Размер по ширине
        this.height = 2; // Размер по высоте
        this.state = state; // Состояние плитки: 'free', 'selected', 'blocked'
        this.data = data;
    }

    // Проверка, занята ли плитка
    isFree() {
        return this.state === 'free';
    }

    // Выбрать плитку
    select() {
        if (this.isFree()) {
            this.state = 'selected';
        } else {
            throw new Error('Tile is not free to select!');
        }
    }

    // Заблокировать плитку
    block() {
        this.state = 'blocked';
    }

    // Освободить плитку
    free() {
        this.state = 'free';
    }

    // Проверка пересечения с другой плиткой
    intersects(otherTile) {
        return (
            this.x < otherTile.x + otherTile.width &&
            this.x + this.width > otherTile.x &&
            this.y < otherTile.y + otherTile.height &&
            this.y + this.height > otherTile.y &&
            this.z === otherTile.z
        );
    }
}

function drawTile(scene, tile, tileWidth, tileHeight) {
    // Create the sprite for the tile
    tile.sprite = scene.add.sprite(tile.x, tile.y, 'tile-back')
        .setInteractive()
        .setDisplaySize(tileWidth, tileHeight);

    if (tile.data) {
        tile.spriteImage = scene.add.sprite(tile.x, tile.y, tile.data)  // tile.data содержит название изображения
            .setOrigin(0.5, 0.5) // Центрируем изображение
            .setDisplaySize(tileWidth * 0.6, tileHeight * 0.6);  // Уменьшаем размер изображения, чтобы оно поместилось по центру
    }

    // Attach the click event to the tile
    tile.sprite.on('pointerdown', () => {
        onTileClick(scene, tile);
    });
}


let selectedTile = null;

function onTileClick(tile) {
    // Если выбрали плитку, то подсвечиваем как выбрануую (прозрачный фильтр серым)
    if (selectedTile === null) {
        selectedTile = tile;
        // прозранчый фильтр серым
    } else {
        // Проверяем, совпадает ли выбранная плитка с текущей
        if (selectedTile.data.values.image === tile.data.values.image && selectedTile !== tile) {
            matchedTiles++;
            selectedTile.setAlpha(0.5); // Убираем плитки
            tile.setAlpha(0.5);
            selectedTile = null;
            // если плитки выбраны они исчзеают
        } else {
            // Если не совпадает, отчищаем от фильтра
            this.time.delayedCall(500, () => {
                selectedTile.setTexture('tile-back');
                tile.setTexture('tile-back');
                selectedTile = null;
            });
        }
    }

    // Проверяем на выигрыш
    if (matchedTiles === tiles.length / 2) {
        alert('Вы выиграли!');
    }
}


export {Tile, drawTile};
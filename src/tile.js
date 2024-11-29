class Tile {
    constructor(x, y, z, state = 'free', data, image) {
        this.x = x; // Координата X
        this.y = y; // Координата Y
        this.z = z; // Координата Z
        this.width = 2; // Размер по ширине
        this.height = 2; // Размер по высоте
        this.state = state; // Состояние плитки: 'free', 'selected', 'blocked'
        this.data = data;
        this.image = image;
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


    onTileClick(tile, selectedTile, matchedTiles) {
        // Проверяем наличие спрайта перед выполнением действий
        if (tile.sprite) {
            if (selectedTile === null) {
                selectedTile = tile;
                // Устанавливаем прозрачность
                selectedTile.sprite.setAlpha(0.5); // Устанавливаем прозрачность
            } else {
                // Проверяем на совпадение
                if (selectedTile.data === tile.data && selectedTile !== tile) {
                    // matchedTiles++;
                    selectedTile.sprite.setAlpha(0.5); // Убираем плитки
                    tile.sprite.setAlpha(0.5);
                    selectedTile = null;
                } else {
                    setTimeout(() => {
                        selectedTile.sprite.setTexture('tile-back');
                        tile.sprite.setTexture('tile-back');
                        selectedTile.sprite.setAlpha(1); // Возвращаем прозрачность
                        tile.sprite.setAlpha(1); // Возвращаем прозрачность
                        selectedTile = null;
                    }, 500);
                }
            }

            // Проверяем на выигрыш
            if (matchedTiles === tiles.length / 2) {
                alert('Вы выиграли!');
            }
        } else {
            console.error('Tile sprite not found when clicked');
        }
    }


}


let selectedTile = null;

export {Tile};
// src/game.js

// Конфигурация игры
const config = {
    type: Phaser.AUTO,           // Автоматический выбор рендерера (WebGL или Canvas)
    width: window.innerWidth,    // Ширина канваса равна ширине экрана
    height: window.innerHeight,  // Высота канваса равна высоте экрана
    scene: {                     // Объект сцены
        preload: preload,        // Функция загрузки ресурсов
        create: create,          // Функция для создания объектов на сцене
        update: update           // Функция для обновления игры каждый кадр
    },
    scale: {
        mode: Phaser.Scale.RESIZE, // Масштабирование при изменении размера окна
        autoCenter: Phaser.Scale.CENTER_BOTH  // Центрирование игры
    }
};

// Инициализация игры
const game = new Phaser.Game(config);

// Функция для загрузки ресурсов
function preload() {
    this.load.image('sky', 'src/assets/sky.jpg'); // Пример загрузки изображения
    this.load.image('star', 'src/assets/star.png');
}

// Функция для создания объектов на сцене
function create() {
    // Добавляем фон
    this.sky = this.add.image(0, 0, 'sky').setOrigin(0, 0); // Устанавливаем точку отсчета фона в верхний левый угол
    this.sky.setScale(window.innerWidth / this.sky.width, window.innerHeight / this.sky.height); // Масштабируем фон

    // Добавляем звезды
    this.stars = this.physics.add.group({
        key: 'star',
        repeat: 11,  // Количество звезд
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    // Добавляем анимацию падения
    this.stars.children.iterate(star => {
        star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)); // Случайный отскок
    });
}

// Функция для обновления игры каждый кадр
function update() {
    // Логика обновления игры
}

// Обновляем размеры канваса при изменении размера окна
window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});

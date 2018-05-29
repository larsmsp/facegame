import { Howl } from "howler";

const _gameMusic = new Howl({
    src: ["/static/audio/music.m4a"]
});

const _menuMusic = new Howl({
    src: ["/static/audio/menu.webm"],
    volume: 0.3,
    loop: true
});

const _powerup = new Howl({
    src: ["/static/audio/Powerup.wav"]
});

const _victory = new Howl({
    src: ["/static/audio/Victory.wav"]
});

const _levelup = new Howl({
    src: ["/static/audio/Levelup.wav"]
});

const _detected = new Howl({
    src: ["/static/audio/Detected.wav"]
});

const _explosions = [
    new Howl({ src: ["/static/audio/Boom1.wav"] }),
    new Howl({ src: ["/static/audio/Boom2.wav"] }),
    new Howl({ src: ["/static/audio/Boom3.wav"] }),
    new Howl({ src: ["/static/audio/Boom4.wav"] }),
    new Howl({ src: ["/static/audio/Boom5.wav"] })
];

let _currentMusicId = null;

export function playGameMusic() {
    _currentMusicId = _gameMusic.play();
    _currentMusicId.fade(0, 0.65, 1000, _currentMusicId);
}

export function playMenuMusic() {
    // const id = _menuMusic.play();
    // _menuMusic.fade(0, 0.3, 3000, id);
}

export function stopMenuMusic() {
    // _menuMusic.stop();
}

export function lowerGameMusic(forMilliseconds) {
    _gameMusic.fade(0.65, 0.3, 1000, _currentMusicId);
    setTimeout(() => {
        _gameMusic.fade(0.3, 0.6, 1000, _currentMusicId);
    }, forMilliseconds);
}

export function playExplosion() {
    const explosion = _explosions[Math.floor(Math.random() * _explosions.length)];
    const id = explosion.play();
    explosion.rate(Math.random() * 0.3 + 0.85, id);
    explosion.volume(0.8, id);
}

export function playDetected() {
    _detected.play();
}

export function playStartGame() {
    _powerup.play();
}

export function playLevelup() {
    _levelup.play();
}

export function playVictory() {
    _victory.play();
}

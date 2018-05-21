import uuidv4 from "uuid/v4";

const HIGHSCORE_KEY = "highscore-list";
const HIGHSCORE_IMAGE_PREFIX = "highscore-img-";

function _getAllHighscores() {
    return JSON.parse(window.localStorage.getItem(HIGHSCORE_KEY) || "[]");
}

export function getTopHighscoresWithImages() {
    const all = _getAllHighscores();
    all.forEach(h => {
        h.playerImageUrl = window.localStorage.getItem(HIGHSCORE_IMAGE_PREFIX + h.id);
    });
}

export function addNewHighscore(playerImageUrl, levelNo, points) {
    const highscores = getTopHighscores();
    const newHighscore = {
        levelNo,
        points,
        id: uuidv4()
    };

    // TODO: Downsize?
    window.localStorage.setItem(HIGHSCORE_IMAGE_PREFIX + id, playerImageUrl);
    window.localStorage.setItem("");
}

export function removeHighscore(id) {
    const highscores = _getAllHighscores();
}

export function clearHighscores() {}

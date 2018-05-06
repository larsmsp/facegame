
export const EMOTION_HAPPY = 'Happy'
export const EMOTION_SAD = 'Sad'
export const EMOTION_ANGRY = 'Angry'
export const EMOTION_SUPRISED = 'Suprised'
export const EMOTION_CONTENT = 'Content'

export const ALL_EMOTIONS = [EMOTION_HAPPY, EMOTION_SAD, EMOTION_ANGRY, EMOTION_SUPRISED, EMOTION_CONTENT]
export const ALL_EMOTION_EMOJIS = {
    [EMOTION_CONTENT]: '😐',
    [EMOTION_HAPPY]: '😁',
    [EMOTION_SAD]: '😩',
    [EMOTION_SUPRISED]: '😲',
    [EMOTION_ANGRY]: '😠',
}

export const GAME_LENGTH_IN_SECONDS = 50
export const LEVEL_MAX_LENGTH_IN_SECONDS = 10
export const SCREENSAVE_AFTER_SECONDS = 5

export { default as SceneWaitingToStart } from './SceneWaitingToStart'
export { default as SceneLevel } from './SceneLevel'
export { default as SceneFinished } from './SceneFinished'
export { default as SceneScreensaver } from './SceneScreensaver'
export const SETTING_CAMERA_DEVICE_ID = "SETTING_CAMERA_DEVICE_ID";
export const SETTING_CATCHPHRASE = "SETTING_CATCHPHRASE";
export const SETTING_RECRUITMENT_TEXT = "SETTING_RECRUITMENT_TEXT";
export const SETTING_PICTURE_QUALITY = "SETTING_PICTURE_QUALITY";
export const SETTING_BACKEND_SERVER = "SETTING_BACKEND_SERVER";
export const SETTING_STARTING_PICTURE_FREQUENCY = "SETTING_STARTING_PICTURE_FREQUENCY";
export const SETTING_NET_DETECTION_CALLS = "SETTING_NET_DETECTION_CALLS";
export const SETTING_NET_UPLOADED_BYTES = "SETTING_NET_UPLOADED_BYTES";

const DEFAULT_SETTINGS = {
    SETTING_CAMERA_DEVICE_ID: "",
    SETTING_CATCHPHRASE: "Look at the camera...",
    SETTING_STARTING_PICTURE_FREQUENCY: "750",
    SETTING_RECRUITMENT_TEXT: "PS. We're hiring!",
    SETTING_PICTURE_QUALITY: "75",
    SETTING_BACKEND_SERVER: "ws://localhost:4001",
    SETTING_NET_UPLOADED_BYTES: "0",
    SETTING_NET_DETECTION_CALLS: "0"
};

export function getSetting(key) {
    if (!DEFAULT_SETTINGS.hasOwnProperty(key)) {
        throw new Error("Unknown settings key: " + key);
    }

    if (process.browser) {
        const value = window.localStorage.getItem(key);
        return value || DEFAULT_SETTINGS[key];
    }

    return DEFAULT_SETTINGS[key];
}

export function setSetting(key, value) {
    if (!DEFAULT_SETTINGS.hasOwnProperty(key)) {
        throw ArgumentException("Unknown settings key: " + key);
    }

    window.localStorage.setItem(key, value);
}

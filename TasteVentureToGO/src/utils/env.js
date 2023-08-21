import { Platform } from "react-native";
//Install Firebase CLI and get the Firebase Emulator Suite
const liveHost = "";
const localHost = "";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;

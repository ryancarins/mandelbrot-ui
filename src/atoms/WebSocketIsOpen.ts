import { atom } from "recoil";

export const WSDataKey = 'wsDataKey';

export const WebSocketIsOpenData = atom({
    key: WSDataKey,
    default: false,
});
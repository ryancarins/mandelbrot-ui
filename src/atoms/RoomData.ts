import { atom } from "recoil";

export const RoomDataKey = 'roomDataKey';

export type Room = {
    name: string,
}

export const RoomData = atom({
    key: RoomDataKey,
    default: [] as any[], //TODO: Actually define room
});
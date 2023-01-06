import { WebSocketIsOpenData } from "../atoms/WebSocketIsOpen";

import { useRecoilState } from "recoil";
import { RoomData } from "../atoms/RoomData";
import { GetSessionID } from "../cache";
import useWebSocket from 'react-use-websocket';
import { useEffect, useMemo } from "react";
import React from "react";

const WS = () => {
    const [isOpen, setIsOpen] = useRecoilState(WebSocketIsOpenData);
    const [, setRoomData] = useRecoilState(RoomData)

    const socketUrl = 'ws://172.23.231.68:42100';

    const webSocket = useWebSocket(socketUrl, {
        onOpen: () => {
            setIsOpen(true);
        },
        onMessage: (message) => {
            var json = JSON.parse(message.data as string);
            console.log(json);
            if (json.WebUI) {
                switch (Object.keys(json.WebUI)[0]) {
                    case "Rooms": {
                        console.log(json.WebUI.Rooms);
                        setRoomData(json.WebUI.Rooms);
                        break;
                    }
                    case "SessionsStarted": {
                        console.log(json.WebUI.SessionsStarted);
                        break;
                    }
                    default: {
                        console.error!(json);
                        console.error("fe5e7464-060e-4a2d-8dd3-005d29c1d6e2: Unrecognised message");
                        break;
                    }
                }
            } else {
                console.error("cb4947f0-eec2-478d-a9ce-60a863f61b23: Unrecognised message");
            }
        },
        onClose: () => {

        console.log('WebSocket Client Disconnected');
        setIsOpen(false);
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });
    
    useEffect(() => {
        console.log()
        webSocket.sendJsonMessage(webUI);
    },[])

    return (
        <></>
    )
}

export default React.memo(WS);

const webUI = {
    WebUI: {
        InitialLoad: {
            client_uid: GetSessionID(),
        }
    }
}
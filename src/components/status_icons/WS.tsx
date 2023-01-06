import { IconButton, Tooltip } from "@mui/material";
import { useRecoilState } from "recoil";
import { WebSocketIsOpenData } from "../../atoms/WebSocketIsOpen";
import { StorageOutlined } from "@mui/icons-material";

	
const WS = () => {
    const [isOpen,] = useRecoilState(WebSocketIsOpenData);
    return (
		<Tooltip title={isOpen ? "Open" : "Disconnected"}>
			<span>
				<IconButton
					disabled={isOpen}
					edge="end"
				>
					<StorageOutlined color={isOpen ? 'success': 'error'}/>
				</IconButton>
			</span>
		</Tooltip>
	)
}

export default WS;
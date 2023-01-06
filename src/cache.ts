import { v4 as uuidv4 } from 'uuid';

let session_id: string;
export const GetSessionID = () => {
	if (!session_id) {
		session_id = uuidv4();
	}
	return session_id;
}
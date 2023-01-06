import { Route, Routes } from "react-router-dom";
import RoomGrid from "../pages/RoomGrid";

const MainContent = () => {
  return (
      <Routes>
        <Route path="/rooms" element={<RoomGrid/>}/>
        <Route path="/" element={<RoomGrid/>}/>
      </Routes>
  );
}

export default MainContent;
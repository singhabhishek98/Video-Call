// import logo from "./logo.svg"; // This import is currently unused
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RoomPage from "./components/Room/Room";

function App() { // Ensure React is in scope for JSX
  return ( // Ensure myMeeting is included in the dependency array
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;

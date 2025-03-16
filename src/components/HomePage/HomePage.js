import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now().toString().substring(-4);
    setRoomId(randomId + timestamp);
  };

  const handleOneAndOneCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
  };
  const handleGroupCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=group-call`);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to Video Calling App</h1>
        <p className="homepage-subtitle">
          Start a video call with a randomly generated Room ID
        </p>
        <div className="room-id-container">
          <input
            type="text"
            className="room-id-input"
            placeholder="Generated Room ID"
            value={roomId}
            readOnly
          />
          <button className="generate-button" onClick={handleRoomIdGenerate}>
            Generate
          </button>
        </div>
        <div className="call-buttons">
          <button
            className="call-button"
            onClick={handleOneAndOneCall}
            disabled={!roomId}
          >
            One-on-One Call
          </button>
          <button
            className="call-button"
            onClick={handleGroupCall}
            disabled={!roomId}
          >
            Group Call
          </button>
        </div>
      </div>
    </div>
  );
}
export default HomePage;

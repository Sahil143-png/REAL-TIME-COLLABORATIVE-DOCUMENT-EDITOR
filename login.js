import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleEnter = () => {
    const id = uuidV4();
    navigate(`/docs/${id}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome to Collab Editor</h1>
        <p>Click below to start editing in real-time</p>
        <button onClick={handleEnter}>Start Editing</button>
      </div>
    </div>
  );
}

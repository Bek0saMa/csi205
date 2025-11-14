import { useState, useEffect } from "react";
import "./css/Animation.css"; // Your existing CSS

// Import images from src/images
import basketball from "./images/Basketball.png";
import football from "./images/Football.png";
import volleyball from "./images/Volleyball.png";
import human from "./images/Blehhh.jpg";
import cartoon from "./images/Anime.jpg";
import woodTexture from "./images/Seamless-Wood-Texture-3-1024x768.jpg";

const ballImages = {
  Basketball: basketball,
  Football: football,
  Volleyball: volleyball,
  Human: human,
  Cartoon: cartoon,
};

export default function Animation() {
  const fieldWidth = 600;
  const fieldHeight = 300;
  const ballDiameter = 100;
  const maxX = fieldWidth - ballDiameter;
  const maxY = fieldHeight - ballDiameter;
  const vx = 5;
  const vy = 5;

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [running, setRunning] = useState(false);
  const [selectedBall, setSelectedBall] = useState("none");

  const calculate = () => {
    setX((prevX) => {
      if (goRight) {
        if (prevX + vx >= maxX) setGoRight(false);
        return Math.min(prevX + vx, maxX);
      } else {
        if (prevX - vx <= 0) setGoRight(true);
        return Math.max(prevX - vx, 0);
      }
    });

    setY((prevY) => {
      if (goDown) {
        if (prevY + vy >= maxY) setGoDown(false);
        return Math.min(prevY + vy, maxY);
      } else {
        if (prevY - vy <= 0) setGoDown(true);
        return Math.max(prevY - vy, 0);
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) calculate();
    }, 25); // 40 FPS
    return () => clearInterval(interval);
  }, [running, goRight, goDown]);

  const handleRunClick = () => setRunning(!running);
  const handleBallClick = (type) => setSelectedBall(type);

  return (
    <div className="anim-container">
      <div
  className="anim-field"
  style={{
    height: 300,
    backgroundImage: `url(${woodTexture})`,
  }}
>
  <div
    className="anim-ball"
    style={{
      left: x + "px",
      top: y + "px",
      backgroundImage:
        selectedBall !== "none" && ballImages[selectedBall]
          ? `url(${ballImages[selectedBall]})`
          : "none",
    }}
  />
</div>


      <div className="anim-control d-flex justify-content-between mt-2">
        <button
          className={`btn ${running ? "btn-danger" : "btn-success"}`}
          onClick={handleRunClick}
        >
          {running ? <i className="bi bi-pause"></i> : <i className="bi bi-play"></i>}{" "}
          {running ? "PAUSE" : "RUN"}
        </button>

        <div>
          {["none", "Basketball", "Football", "Volleyball", "Human", "Cartoon"].map(
            (type) => (
              <button
                key={type}
                className={`btn ${
                  selectedBall === type
                    ? type === "none"
                      ? "btn-secondary"
                      : "btn-primary"
                    : "btn-outline-primary"
                } me-1`}
                onClick={() => handleBallClick(type)}
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import blehhh from "./images/Blehhh.jpg";

// Example artworks (add more later)
import art1 from "./images/Untitled203_20230529231357.png";
import art2 from "./images/Untitled195_20230426045537.png";
import art3 from "./images/Untitled166_20220825224541.png";

import "./css/Home.css"; // Import CSS for semi-transparent background and styling

export default function Home() {
  return (
    <div className="home-container home-background-overlay d-flex flex-column align-items-center justify-content-start">
      {/* Header section with image + intro */}
      <div className="d-flex align-items-center justify-content-center mb-4 flex-wrap">
        <img
          src={blehhh}
          alt="Profile"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "3px solid #b58a4a", // subtle gold border to match theme
            marginRight: "2rem",
          }}
        />

        <div style={{ maxWidth: "600px", textAlign: "left" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "0.5rem", color: "#6a4e2e" }}>
            นายณัฐดนัย แสงศรี
          </h1>
          <h3 style={{ fontWeight: "500", color: "#5a4534", marginBottom: "1rem" }}>
            รหัสนักศึกษา 67151039 | สาขา Computer Science (ปี 2)
          </h3>
          <p style={{ fontSize: "1.1rem", color: "#4a3b2d" }}>
            Welcome to my website! <br />
            This home page features my introduction and portfolio, as well as past assignments from the classes I have taken.
            <br /> <br />With that said, my name is <b>Natdanai Sangsri</b> (Nat), and my hobbies include singing and creating art, as shown in the examples below. 
            My current interests include games by the developer Project Moon, such as <i>Library of Ruina</i> and <i>Limbus Company</i>.
          </p>
        </div>
      </div>

      {/* Artwork Section */}
      <div style={{ textAlign: "center", marginTop: "2rem", width: "100%" }}>
        <h2 style={{ fontWeight: "bold", marginBottom: "1rem", color: "#6a4e2e" }}>🎨 My Artwork</h2>
        <div className="d-flex flex-wrap justify-content-center gap-3" style={{ maxWidth: "800px", margin: "auto" }}>
          <img
            src={art1}
            alt="Artwork 1"
            className="home-artwork"
          />
          <img
            src={art2}
            alt="Artwork 2"
            className="home-artwork"
          />
          <img
            src={art3}
            alt="Artwork 3"
            className="home-artwork"
          />
        </div>
      </div>
    </div>
  );
}

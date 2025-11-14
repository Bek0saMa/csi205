import React from "react";
import headerImage from "./ruina_library.webp"; // replace with your local image path

const AppHeader = () => {
    const headerStyle = {
        width: "95%",            // slightly smaller than viewport
        margin: "1rem auto",     // centers with top spacing
        borderRadius: "15px",    // soft rounded corners
        boxShadow: "0 4px 15px rgba(0,0,0,0.4)", // soft shadow
        height: "125px",
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.45)", // semi-transparent overlay
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Cinzel', serif",
    textTransform: "uppercase",
  };

  const titleStyle = {
    margin: 0,
    fontSize: "2.8rem",
    fontWeight: "700",
    letterSpacing: "2px", // high-contrast spacing
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)", // subtle shadow for readability
  };

  const subtitleStyle = {
    margin: "0.5rem 0 0 0",
    fontSize: "1.3rem",
    fontWeight: 400,
    letterSpacing: "1px",
    fontVariant: "small-caps", // small caps for Library vibe
    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
  };

  return (
    <header style={headerStyle}>
      <div style={overlayStyle}>
        <h1 style={titleStyle}>CSI 205</h1>
        <p style={subtitleStyle}>Computer Science</p>
      </div>
    </header>
  );
};

export default AppHeader;

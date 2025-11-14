import React from "react";
import { FaEnvelope, FaInstagram, FaDiscord } from "react-icons/fa"; // install react-icons if not already

const AppFooter = () => {
  const footerStyle = {
    width: "100%",
    padding: "1.5rem 1rem",
    backgroundColor: "rgba(0,0,0,0.85)", // dark footer
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Cinzel', serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  };

  const linkStyle = {
    color: "#e7dcbc", // warm parchment tone
    textDecoration: "none",
    margin: "0 0.5rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "1rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>Contact Me</div>
      <div>
        <span style={linkStyle}>
          <FaEnvelope /> natdanai_san@spumail.net
        </span>
        |
        <span style={linkStyle}>
          <FaInstagram /> @bek0san_wastaken
        </span>
        |
        <span style={linkStyle}>
          <FaDiscord /> @bek0sama
        </span>
      </div>
      <div style={{ fontSize: "0.85rem", marginTop: "0.5rem", color: "#ccc" }}>
        © 2025 Natdanai Sangsri
      </div>
    </footer>
  );
};

export default AppFooter;

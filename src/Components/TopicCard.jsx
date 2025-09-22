import React from "react";

const TopicCard = ({ topic, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        backgroundColor: "#ffffffcc",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        transition: "transform 0.2s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={topic.image}  // <-- use image property
        alt={topic.name}
        style={{ width: "100px", height: "100px", marginBottom: "10px" }}
      />
      <h2>{topic.name}</h2>
    </div>
  );
};

export default TopicCard;

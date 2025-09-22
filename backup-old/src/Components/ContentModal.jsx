import React from "react";

const ContentModal = ({ topic, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          width: "80%",
          maxWidth: "700px",
          maxHeight: "90%",
          overflowY: "auto",
          position: "relative"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer"
          }}
        >X</button>

        <h2>{topic.name}</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{topic.basicContent}</p>
        <h3>Advanced Video:</h3>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={topic.advancedVideo}
            title={`${topic.name} Video`}
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentModal;

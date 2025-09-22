import React, { useState } from "react";
import TopicCard from "./components/TopicCard";
import ContentModal from "./components/ContentModal";
import topics from "./data/topics";
import "./index.css";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#fff", textShadow: "1px 1px 5px #000" }}>
        Welcome to Web Development Learning App
      </h1>

      <div
        className="topic-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "40px"
        }}
      >
        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            topic={topic}
            onClick={() => setSelectedTopic(topic)}
          />
        ))}
      </div>

      {selectedTopic && (
        <ContentModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  );
}

export default App;

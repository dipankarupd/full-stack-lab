import React, { useState } from "react";
import "../App.css";

function CenteredTextApp() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      {/* Display the text */}
      <div className="display-text">{text || "Your Text Will Appear Here"}</div>

      {/* Text area for input */}
      <textarea
        className="textarea"
        rows="4"
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default CenteredTextApp;

import React, { useState } from "react";
import "../style.css";

const InputTag = () => {
  const [msg, setMsg] = useState("");
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const removeLastTag = () => {
    if (tags.length > 0) {
      const updatedTags = [...tags];
      updatedTags.pop(); // Remove the last tag
      setTags(updatedTags);
    }
  };

  const handleInputKeyDown = (event) => {
    const { key } = event;
    if (key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue) {
        addTag(trimmedValue);
        setInputValue("");
      }
    } else if (key === "Backspace" && inputValue === "") {
      removeLastTag();
    } else if (key === "," && inputValue.trim() !== "") {
      addTag(inputValue.trim());
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="w-full">
      <div
        onClick={() => document.getElementById("autoClick").focus()}
        className="tags-container"
      >
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
            <span style={{ cursor: "pointer" }} onClick={() => removeTag(tag)}>
              x
            </span>
          </div>
        ))}
        <input
          id="autoClick"
          className="input-field"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown} // Changed from onKeyPress to onKeyDown
          placeholder="Enter or Comma for add"
        />
      </div>
    </div>
  );
};

export default InputTag;

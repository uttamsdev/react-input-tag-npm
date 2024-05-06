import React, { useState } from "react";
import "./styles.css";

const ReactTagInput = ({tags,setTags}) => {
//   const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the tag being edited

  const addTag = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const removeLastTag = () => {
    if (tags.length > 0 && inputValue === "") {
      const updatedTags = [...tags];
      updatedTags.pop();
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
    } else if (key === "Backspace") {
      removeLastTag();
    } else if (key === "," && inputValue.trim() !== "") {
      addTag(inputValue.trim());
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditTag = (index) => {
    setEditIndex(index);
  };

  const handleSaveTag = (index, newValue) => {
    const updatedTags = [...tags];
    updatedTags[index] = newValue;
    setTags(updatedTags);
  };

  const handleEditInputKeyDown = (event, index, value) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      handleSaveTag(index, value);
      setEditIndex(null);
    }
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className="w-full">
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag" onClick={() => handleEditTag(index)}>
            {editIndex === index ? (
              <input
                type="text"
                value={tag}
                onChange={(e) => handleSaveTag(index, e.target.value)}
                onKeyDown={(e) => handleEditInputKeyDown(e, index, tag)}
                onClick={handleInputClick}
                onBlur={() => setEditIndex(null)}
              />
            ) : (
              <>
                <span>{tag}</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => removeTag(tag)}
                >
                  x
                </span>
              </>
            )}
          </div>
        ))}
        <input
          className="input-field"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Enter or Comma to add"
        />
      </div>
    </div>
  );
};

export default ReactTagInput;

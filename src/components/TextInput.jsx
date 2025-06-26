import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import LoadingSpinner from "./LoadingSpinner";

const TextInput = forwardRef(function TextInput({ onStart, loading }, ref) {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    if (!inputValue) {
      inputRef.current.focus();
    } else {
      onStart(inputValue);
    }
  }

  return (
    <>
      {loading && <LoadingSpinner />}
      <h2>Please enter your name</h2>
      <input
        type="text"
        id="nameInput"
        ref={inputRef}
        value={inputValue}
        placeholder="Enter name"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>START QUIZ</button>
    </>
  );
});

export default TextInput;

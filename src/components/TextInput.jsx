import {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useContext,
} from "react";
import { QuizContext } from "./QuizProvider";
import LoadingSpinner from "./LoadingSpinner";

const TextInput = forwardRef(function TextInput({ setName }, ref) {
  const [inputValue, setInputValue] = useState("");
  // TODO Loading is now in state
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useContext(QuizContext);

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
      setIsLoading(true);
      setTimeout(() => {
        console.log(99, dispatch);
        dispatch({ type: "START" }, state);
        setIsLoading(false);
        setName({ type: "SET_USERNAME", inputValue });
      }, 500);
    }
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}
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

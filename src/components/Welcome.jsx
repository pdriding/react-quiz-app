import TextInput from "./TextInput";
import { useRef, useEffect } from "react";

export default function Welcome({ onStart, loading }) {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <>
      <h1>Welcome to the Quiz</h1>
      <TextInput onStart={onStart} loading={loading} ref={textRef} />
    </>
  );
}

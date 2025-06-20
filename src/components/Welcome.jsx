import TextInput from "./TextInput";
import { useRef, useEffect } from "react";

export default function Welcome({ setName }) {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <>
      <h1>Welcome to the Quiz</h1>
      <TextInput setName={setName} ref={textRef} />
    </>
  );
}

import TextInput from "./TextInput";
import { useRef, useEffect } from "react";

export default function Welcome({ onStart, loading }) {
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-green-600">Welcome to the Quiz</h1>
      <TextInput onStart={onStart} loading={loading} ref={textRef} />
    </div>
  );
}

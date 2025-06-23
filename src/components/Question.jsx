// import { QuizContext } from "./QuizProvider";
// import { useState, useContext, useEffect } from "react";

export default function Question({ curQuestion }) {
  // const { state } = useContext(QuizContext);
  return (
    <>
      <p className="text-amber-300 text-5xl">{curQuestion}</p>
    </>
  );
}

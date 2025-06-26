import { useState, useEffect } from "react";

export default function Question({
  questionText,
  answers,
  correctAnswer,
  onAnswer,
  nextQuestion,
}) {
  const [selected, setSelected] = useState(null);

  function handleClick(ans) {
    onAnswer(ans);
    setSelected(ans);
    setTimeout(() => {
      nextQuestion();
    }, 1000);
  }

  useEffect(() => {
    setSelected(null);
  }, [answers]);
  return (
    <>
      <p className="text-amber-300 text-3xl">{questionText}</p>
      {answers.map((a, i) => {
        let classToken;
        if (selected) {
          if (correctAnswer === a) {
            classToken = "!bg-green-500";
          } else {
            classToken = "!bg-red-500";
          }
        }
        return (
          <button
            disabled={!!selected}
            className={`w-[300px] ${selected ? classToken : ""}`}
            value={a}
            onClick={() => handleClick(a)}
            key={i}
          >
            {a}
          </button>
        );
      })}
    </>
  );
}

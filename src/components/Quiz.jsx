import { useState, useEffect, useContext } from "react";
import Question from "./Question";
import LoadingSpinner from "./LoadingSpinner";
import { fetchQuestions } from "../api/questions";
import { QuizContext } from "./QuizProvider";
import Answer from "./Answer";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState({
    loading: true,
    curQuestion: "",
    answers: [],
    correct: "",
  });

  const { state } = useContext(QuizContext);

  useEffect(() => {
    fetchQuestions().then((qs) => {
      setCurrentQuestion({
        load: false,
        curQuestion: qs[state.currentIndex].question,
        answers: qs[state.currentIndex].answers,
      });
    });
  }, [state.currentIndex]);

  return (
    <>
      {currentQuestion.loading && <LoadingSpinner />}
      {!currentQuestion.loading && (
        <>
          <h1>Quiz</h1>
          <Question curQuestion={currentQuestion.curQuestion} />
          // TODO
          <Answer answers={state.questions[state.currentIndex].answers} />
        </>
      )}
    </>
  );
}

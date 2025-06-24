import { useState, useEffect, useContext, useCallback } from "react";
import { QuizContext } from "./QuizProvider";

export default function Answer() {
  const { state, dispatch } = useContext(QuizContext);
  const answers = state.questions[state.currentIndex].answers;

  const checkAnswer = useCallback(
    (ans) => {
      const usersAnswer = ans.target.value;

      // const correct =
      //   usersAnswer === state.questions[state.currentIndex].correct;

      // if (correct) state.score++;

      // const prevHistory = state.history;
      // state.history = [...prevHistory, usersAnswer];

      dispatch({ type: "ANSWER", payload: usersAnswer }, state);
    },
    [dispatch, state]
  );

  return (
    <>
      {answers.map((a, i) => {
        return (
          <button value={a} onClick={checkAnswer} key={i}>
            {a}
          </button>
        );
      })}
    </>
  );
}

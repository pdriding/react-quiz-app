import React, { createContext, useReducer, useEffect } from "react";
import { fetchQuestions } from "../api/questions";

const initialState = {
  questions: [],
  currentIndex: -1,
  score: 0,
  history: [],
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "START":
      return { ...state, currentIndex: 0 };
    case "ANSWER":
      const isCorrect =
        action.payload === state.questions[state.currentIndex].correct;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        history: [
          ...state.history,
          { id: state.questions[state.currentIndex].id, correct: isCorrect },
        ],
      };
    case "NEXT":
      return { ...state, currentIndex: state.currentIndex + 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    fetchQuestions().then((qs) =>
      dispatch({ type: "SET_QUESTIONS", payload: qs })
    );
  }, []);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

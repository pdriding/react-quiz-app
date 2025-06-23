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
      console.log(555, action.payload);
      return { ...state, questions: action.payload };
    case "START":
      return { ...state, currentIndex: 0 };
    // TODO
    case "ANSWER":
      return { ...state, yes: 1 };
    case "NEXT":
      return { ...state, yes: 1 };
    case "RESET":
      return { ...state, yes: 1 };
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

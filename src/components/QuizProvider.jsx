import { createContext, useReducer, useEffect, useContext } from "react";

export const QuizContext = createContext();

const initialState = {
  userName: "",
  questions: [],
  currentIndex: -1,
  score: 0,
  history: [],
  loading: false,
};

function quizReducer(state, action) {
  console.log(99, state);
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "ADD_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "START":
      return { ...state, currentIndex: 0 };
    case "ANSWER": {
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
    }
    case "NEXT":
      return { ...state, currentIndex: state.currentIndex + 1 };
    case "RESET":
      // TODO
      return { ...initialState };
    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

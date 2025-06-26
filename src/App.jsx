import { useContext } from "react";
import { QuizContext } from "./components/QuizProvider";
import { ThemeContext } from "./components/ThemeProvider";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import ResultsModal from "./components/ResultsModal";

export default function App() {
  const { state, dispatch } = useContext(QuizContext);
  const { theme, themeDispatch } = useContext(ThemeContext);

  function handleStart(inputValue) {
    dispatch({ type: "LOADING", payload: true });
    setTimeout(() => {
      dispatch({ type: "SET_USERNAME", payload: inputValue });
      dispatch({ type: "START" });
      dispatch({ type: "LOADING", payload: false });
    }, 500);
  }

  return (
    <div className={`app-container ${theme.curCol}`}>
      <button onClick={() => themeDispatch({ type: "CHANGE_THEME" })}>
        Toggle Theme
      </button>
      {state.currentIndex === -1 && (
        <Welcome onStart={handleStart} loading={state.loading} />
      )}
      {state.currentIndex >= 0 &&
        state.currentIndex < state.questions.length && (
          <Quiz state={state} dispatch={dispatch} />
        )}
      {state.currentIndex === state.questions.length && (
        <ResultsModal
          state={state}
          restart={() => dispatch({ type: "RESET" })}
        />
      )}
    </div>
  );
}

import { useContext } from "react";
import { QuizContext } from "./components/QuizProvider";
import { ThemeContext } from "./components/ThemeProvider";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import ResultsModal from "./components/ResultsModal";

export default function App() {
  const { state, dispatch } = useContext(QuizContext);
  const { toggleTheme } = useContext(ThemeContext);

  function handleStart(inputValue) {
    dispatch({ type: "LOADING", payload: true });
    setTimeout(() => {
      dispatch({ type: "SET_USERNAME", payload: inputValue });
      dispatch({ type: "START" });
      dispatch({ type: "LOADING", payload: false });
    }, 500);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* Theme Toggle Button */}
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-md text-black dark:text-white bg-white dark:bg-gray-700 shadow-md"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>

      {/* Quiz Container */}
      <div className="w-[400px] h-[60vh] p-6 py-10 my-10 rounded-2xl shadow-2xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center">
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
    </div>
  );
}

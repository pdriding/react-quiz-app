import { useContext } from "react";
import { QuizContext } from "./components/QuizProvider";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
// import ResultsModal from "./components/ResultsModal";

export default function App() {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <div className="app-container">
      {state.currentIndex === -1 && <Welcome setName={dispatch} />}
      {state.currentIndex >= 0 &&
        state.currentIndex < state.questions.length && (
          <Quiz state={state} dispatch={dispatch} />
        )}
      // TODO
      {state.currentIndex === state.questions.length && <ResultsModal />}
    </div>
  );
}

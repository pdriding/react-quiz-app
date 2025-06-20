import { useContext } from "react";
import { QuizContext } from "./components/QuizProvider";
// import Welcome from "./components/Welcome";
// import Quiz from "./components/Quiz";
// import ResultsModal from "./components/ResultsModal";

export default function App() {
  const { state } = useContext(QuizContext);

  return (
    <div className="app-container">
      <h1 className="text-red-600">'HELLOOOOOOOOOOOOOOO'</h1>
      {/* {state.currentIndex === -1 && <Welcome />} */}
      {state.currentIndex >= 0 &&
        state.currentIndex < state.questions.length && <Quiz />}
      {state.currentIndex === state.questions.length && <ResultsModal />}
    </div>
  );
}

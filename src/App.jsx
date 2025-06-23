import { useContext, useEffect, useState } from "react";
import { QuizContext } from "./components/QuizProvider";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
// import ResultsModal from "./components/ResultsModal";

export default function App() {
  const { state, dispatch } = useContext(QuizContext);
  const [usersName, setUsersName] = useState("");

  console.log(555, state);

  useEffect(() => {}, [dispatch, state, usersName]);

  return (
    <div className="app-container">
      {state.currentIndex === -1 && <Welcome setName={setUsersName} />}
      {state.currentIndex >= 0 &&
        state.currentIndex < state.questions.length && <Quiz />}
      {state.currentIndex === state.questions.length && <ResultsModal />}
    </div>
  );
}

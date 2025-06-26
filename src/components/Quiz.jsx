import Question from "./Question";
import LoadingSpinner from "./LoadingSpinner";

export default function Quiz({ state, dispatch }) {
  if (state.loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center gap-4 text-center  ">
      <h1 className="text-2xl font-bold text-green-600">Quiz</h1>
      <h2 className="text-lg font-semibold">
        Question {state.currentIndex + 1}
      </h2>

      <Question
        questionText={state.questions[state.currentIndex].question}
        answers={state.questions[state.currentIndex].answers}
        correctAnswer={state.questions[state.currentIndex].correct}
        onAnswer={(ans) => dispatch({ type: "ANSWER", payload: ans })}
        nextQuestion={() => dispatch({ type: "NEXT" })}
      />
    </div>
  );
}

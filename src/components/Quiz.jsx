import Question from "./Question";
import LoadingSpinner from "./LoadingSpinner";

export default function Quiz({ state, dispatch }) {
  if (state.loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <>
        <h1>Quiz</h1>
        <h2>Question {state.currentIndex + 1}</h2>

        <Question
          questionText={state.questions[state.currentIndex].question}
          answers={state.questions[state.currentIndex].answers}
          correctAnswer={state.questions[state.currentIndex].correct}
          onAnswer={(ans) => dispatch({ type: "ANSWER", payload: ans })}
          nextQuestion={() => dispatch({ type: "NEXT", dispatch: dispatch })}
        />
      </>
    </>
  );
}

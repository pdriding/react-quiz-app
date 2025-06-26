import { createPortal } from "react-dom";

export default function ResultsModal({ state, restart }) {
  const score = state.score;
  const questionsLength = state.questions.length;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 dark:bg-gray-900"
      role="dialog"
      aria-modal="true"
      aria-labelledby="results-title"
    >
      <div className="bg-white rounded-lg w-[90%] max-w-md shadow-lg overflow-hidden">
        <header className="px-4 py-3 border-b border-gray-200 bg-gray-100">
          <h2
            id="results-title"
            className=" text-gray-900 text-xl font-semibold m-0"
          >
            Quiz Results
          </h2>
        </header>
        <section className="p-4 text-gray-800 text-base">
          <p>
            You answered <strong>{score}</strong> out of{" "}
            <strong>{questionsLength}</strong> questions correctly!
          </p>
          <p>
            Your score:{" "}
            <strong>{((score / questionsLength) * 100).toFixed(0)}%</strong>
          </p>
        </section>
        <footer className="flex justify-end gap-2 px-4 py-3 border-t border-gray-200 bg-gray-100">
          <button
            onClick={() => restart()}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded px-4 py-2"
            type="button"
            data-action="retake"
          >
            Retake Quiz
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
}

import { createPortal } from "react-dom";

export default function ResultsModal({ state, restart }) {
  const score = state.score;
  const questionsLength = state.questions.length;

  return createPortal(
    <>
      <div
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="results-title"
      >
        <div className="modal-content">
          <header className="modal-header">
            <h2 id="results-title">Quiz Results</h2>
          </header>
          <section className="modal-body">
            <p>
              You answered <strong>{score}</strong> out of{" "}
              <strong>{questionsLength}</strong> questions correctly!
            </p>
            <p>
              Your score:{" "}
              <strong>{((score / questionsLength) * 100).toFixed(0)}%</strong>
            </p>
          </section>
          <footer className="modal-footer">
            <button
              onClick={() => restart()}
              className="modal-button"
              type="button"
              data-action="retake"
            >
              Retake Quiz
            </button>
            <button className="modal-button" type="button" data-action="close">
              Close
            </button>
          </footer>
        </div>
      </div>
    </>,
    document.body
  );
}

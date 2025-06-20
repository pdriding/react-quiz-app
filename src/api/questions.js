export async function fetchQuestions() {
  // simulate network delay
  await new Promise((res) => setTimeout(res, 500));
  return [
    {
      id: 1,
      question: "What is 2 + 2?",
      answers: ["3", "4", "5"],
      correct: "4",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter"],
      correct: "Mars",
    },
    // add more questions as needed
  ];
}

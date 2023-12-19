import { useState } from "react";

import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  const answers = QUESTIONS[activeQuestionIndex].answers.map((answer) => (
    <li key={answer} className="answer">
      <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
    </li>
  ));

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">{answers}</ul>
      </div>
    </div>
  );
}

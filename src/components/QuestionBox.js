import React, { useState } from "react";

function QuestionBox({ question, options, selected }) {
  const [answer, setanswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setanswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default QuestionBox;

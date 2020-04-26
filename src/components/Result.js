import React from "react";

function Result({ score, playAgain }) {
  return (
    <div className="score-board">
      <div className="score">Your Score: {score} / 5 correct answers.</div>
      <button className="playBtn" onClick={playAgain}>
        playAgain!
      </button>
    </div>
  );
}

export default Result;

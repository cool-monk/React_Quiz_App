import React, { Component } from "react";
import ReactDOM from "react-dom";
import quizService from "./quizService";

import "./assets/style.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class QuizBee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
    };
    console.log(this.state.responses);
  }

  getQuestion = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    console.log("correct answers: ", correctAnswer);
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  componentDidMount() {
    this.getQuestion();
  }

  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => {
                  console.log(answer);
                  this.computeAnswer(answer, correct);
                }}
              ></QuestionBox>
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain}></Result>
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));

import React, { Component } from "react";
import { connect } from "react-redux";

import { addQuestion } from "../redux";

class QuestionAdder extends Component {
  constructor(props) {
    super(props);
    this.toggleAdderCollapsed = this.toggleAdderCollapsed.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  state = {
    adderCollapsed: true,
    newQuestionValue: ""
  };

  toggleAdderCollapsed() {
    this.setState({ adderCollapsed: !this.state.adderCollapsed });
  }

  addQuestion() {
    let value = this.state.newQuestionValue;
    this.props.addQuestion(value);
    this.setState({ newQuestionValue: "" });
  }

  updateNewQuestionValue(value) {
    this.setState({ newQuestionValue: value });
  }

  render() {
    const questionBox = (
      <div className="question-box">
        <input
          type="text"
          style={{ marginRight: "10px" }}
          placeholder="Your Question"
          value={this.newQuestionValue}
          onChange={event => this.updateNewQuestionValue(event.target.value)}
          onKeyPress={event => {
              if(event.keyCode == 13 || event.which == 13){
                  this.addQuestion();
                  this.toggleAdderCollapsed();
              }
          }}
        />
        <i class="fas fa-plus-circle add-button fa-2x"
          onClick={() => {
            this.addQuestion();
            this.toggleAdderCollapsed();
          }}
        ></i>
      </div>
    );
    return (
      <div className="container question-adder">
        {this.state.adderCollapsed ? (
          <i class="fas fa-plus-circle add-button fa-2x" onClick={this.toggleAdderCollapsed}></i>
        ) : (
          questionBox
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuestion: value => {
      dispatch(addQuestion(value));
    }
  };
};

export default connect(null, mapDispatchToProps)(QuestionAdder);

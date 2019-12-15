import React, {Component} from 'react';

import AnswerContainer from './AnswerContainer';

class Question extends Component{
    
    state = {
        answerBoxCollapsed: true,
        answer: '',
        contentsCollapsed: false
    }

    constructor(props){
        super(props);
        this.addAnswer = this.addAnswer.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.toggleAnswerBoxCollapsed = this.toggleAnswerBoxCollapsed.bind(this);
        this.toggleContentsCollapsed = this.toggleContentsCollapsed.bind(this);
    }

    addAnswer(){
        let value = this.state.answer;
        this.props.addAnswer(value);
        this.setState({answer: ''});
    }

    updateAnswer(value){
        this.setState({answer: value});
    }

    toggleAnswerBoxCollapsed(){
        this.setState({answerBoxCollapsed: !this.state.answerBoxCollapsed});
    }

    toggleContentsCollapsed(){
        this.setState({contentsCollapsed: !this.state.contentsCollapsed});
    }

    render(){
              const controls = (
                <div class="controls">
                  <i
                    class="fas fa-angle-double-up control-icon"
                    onClick={this.props.incrementUps}
                  />
                  <span>{this.props.ups}</span>
                  <i
                    class="fas fa-angle-double-down control-icon"
                    onClick={this.props.incrementDowns}
                  />
                  <span>{this.props.downs}</span>
                  <i
                    class="fas fa-feather-alt control-icon"
                    onClick={this.toggleAnswerBoxCollapsed}
                  >
                    Answer
                  </i>
                  {this.props.answers.length > 0 &&
                    (this.state.contentsCollapsed ? (
                      <i
                        class="fas fa-angle-up control-icon"
                        onClick={this.toggleContentsCollapsed}
                      ></i>
                    ) : (
                      <i
                        class="fas fa-angle-down control-icon"
                        onClick={this.toggleContentsCollapsed}
                      ></i>
                    ))}
                </div>
              );

              const answerBox = (
                <div className="response-box">
                  <input
                    type="text"
                    placeholder="Your Answer"
                    value={this.answer}
                    style={{ marginRight: "10px" }}
                    onChange={event => this.updateAnswer(event.target.value)}
                    onKeyPress={event => {
                        if(event.keyCode == 13 || event.which == 13){
                            this.addAnswer();
                            this.toggleAnswerBoxCollapsed();
                        }
                    }}
                  />
                  <button
                    onClick={() => {
                      this.addAnswer();
                      this.toggleAnswerBoxCollapsed();
                    }}
                  >
                    {` Answer`}
                  </button>
                </div>
              );

              return (
                <div className="card">
                  <p className="question">{this.props.value}</p>
                  {this.state.answerBoxCollapsed ? controls : answerBox}
                  {!this.state.contentsCollapsed && (
                    <AnswerContainer
                      answers={this.props.answers}
                      addAnswer={this.props.addAnswer}
                      incrementAnswerUps={this.props.incrementAnswerUps}
                      incrementAnswerDowns={this.props.incrementAnswerDowns}
                      addComment={this.props.addComment}
                      incrementCommentUps={this.props.incrementCommentUps}
                      incrementCommentDowns={this.props.incrementCommentDowns}
                    />
                  )}
                </div>
              );
            }
}

export default Question;
import React, {Component} from 'react';

import AnswerContainer from './AnswerContainer';

class Question extends Component{
    
    state = {
        answerBoxCollapsed: true,
        answer: ''
    }

    constructor(props){
        super(props);
        this.addAnswer = this.addAnswer.bind(this);
        this.updateAnswer = this.updateAnswer.bind(this);
        this.toggleAnswerBoxCollapsed = this.toggleAnswerBoxCollapsed.bind(this);
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

    render(){
        return (
           <div className="question card">
                <span>{this.props.value}</span><br/>
                <div class="subtitle">
                    <span>{this.props.ups}</span><span> ------ </span>
                    <span>{this.props.downs}</span>
                </div>
                <hr />
                <button style={{marginRight: '10px'}} onClick={this.props.incrementUps}>Up</button>
                <button onClick={this.props.incrementDowns}>Down</button><br />
                
                {this.state.answerBoxCollapsed ?
                    (<button onClick={this.toggleAnswerBoxCollapsed}>Answer</button>)
                    :(<div className="comment-box">
                        <input type='text' placeholder="Your Answer"  value={this.answer}
                            style={{marginRight: '10px'}} 
                            onChange={(event) => this.updateAnswer(event.target.value)}/>
                    <button onClick={() => { 
                        this.addAnswer(); this.toggleAnswerBoxCollapsed();
                    }}>Ok</button>
                    </div>)
                }

                <AnswerContainer 
                    answers={this.props.answers}
                    addAnswer={this.props.addAnswer}
                    incrementAnswerUps={this.props.incrementAnswerUps}
                    incrementAnswerDowns={this.props.incrementAnswerDowns}
                    addComment={this.props.addComment}
                    incrementCommentUps={this.props.incrementCommentUps}
                    incrementCommentDowns={this.props.incrementCommentDowns}
                 />
           </div>
        );
    }
}

export default Question;
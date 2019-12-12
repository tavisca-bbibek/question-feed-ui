import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    addComment,
    incrementQuestionUps,
    incrementQuestionDowns,
    incrementCommentUps,
    incrementCommentDowns
} from '../redux';

import Question from './Question';

class QuestionContainer extends Component {
    
    render(){
        return (
            <div className="question-container">
                {
                    this.props 
                    && this.props.questions 
                    && this.props.questions.map(
                        question => <Question key={question.id} 
                        question={question} 
                        addComment={this.props.addComment}
                        incrementUps={ _=>  this.props.incrementQuestionUps(question.id)}
                        incrementDowns={ _=>  this.props.incrementQuestionDowns(question.id)}
                        incrementCommentUps={this.props.incrementCommentUps}
                        incrementCommentDowns={this.props.incrementCommentDowns}
                        />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let questions = [];
    state.question.questions.forEach((v) => questions.push(v));
    return {questions};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (questionId, value) => dispatch(addComment(questionId, value)),
        incrementQuestionUps: (questionId) => dispatch(incrementQuestionUps(questionId)),
        incrementQuestionDowns: (questionId) => dispatch(incrementQuestionDowns(questionId)),
        incrementCommentUps: (questionId, commentId) => dispatch(incrementCommentUps(questionId, commentId)),
        incrementCommentDowns: (questionId, commentId) => dispatch(incrementCommentDowns(questionId, commentId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
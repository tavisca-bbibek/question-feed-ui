import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    incrementQuestionUps,
    incrementQuestionDowns,
    addAnswer,
    incrementAnswerUps,
    incrementAnswerDowns,
    addComment,
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
                        {...question}
                        incrementUps={ _=>  this.props.incrementQuestionUps(question.id)}
                        incrementDowns={ _=>  this.props.incrementQuestionDowns(question.id)}
                        addAnswer={value => this.props.addAnswer(question.id, value)}
                        incrementAnswerUps={this.props.incrementAnswerUps}
                        incrementAnswerDowns={this.props.incrementAnswerDowns}
                        addComment={this.props.addComment}
                        incrementCommentUps={this.props.incrementCommentUps}
                        incrementCommentDowns={this.props.incrementCommentDowns}
                        />
                    )
                }
            </div>
        );
    }
}

// Builds the tree structure with root 'question'.
// questions -> question
//                  | ...
//                  | answers -> answer
//                                  | ...
//                                  | comments -> comment
//                                                    | ...
//                                                    | comments -> comment
//                                                                       | ...

const getChildComments = (flatCommentList, comment) => {
    let commentIds = comment.commentIds;
    if(!commentIds || commentIds.length === 0){
        return [];
    }

    const childComments = [];
    commentIds.forEach(commentId => {
        comment = flatCommentList.filter(comment => comment.id === commentId)[0];
        comment.comments = getChildComments(flatCommentList, comment);
        delete comment.commentIds;

        //Move comment from array to its parrent's comments list
        flatCommentList.splice(flatCommentList.indexOf(comment), 1);
        childComments.push(comment);
    });
    return childComments;
}

const getCommentIdToCommentTreeMap = (flatCommentList) =>{
    flatCommentList = [...flatCommentList];
    const CommentsWithChildComments = new Map();

    while(flatCommentList.length > 0){
        const comment = flatCommentList.shift();

        const commentsOfComment = getChildComments(flatCommentList, comment);
        delete comment.commentIds;
        comment.comments = commentsOfComment;

        CommentsWithChildComments.set(comment.id, comment);
    }

    return CommentsWithChildComments;
}

const mapStateToProps = (state) => {

    const flatCommentList = [];
    state.comment.comments.forEach((comment) => flatCommentList.push({...comment}));
    const commentIdToCommentTreeMap = getCommentIdToCommentTreeMap(flatCommentList);

    const answers = new Map();
    state.answer.answers.forEach((answer) => {
        const comments = answer.commentIds.map(commentId => commentIdToCommentTreeMap.get(commentId));
        answers.set(answer.id, {...answer, comments});
    });

    const questions = [];
    state.question.questions.forEach(question => {
        const answerList = question.answerIds.map(answerId => answers.get(answerId));
        questions.push({...question, answers: answerList});
    });
    
    return {questions};
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementQuestionUps: (questionId) => dispatch(incrementQuestionUps(questionId)),
        incrementQuestionDowns: (questionId) => dispatch(incrementQuestionDowns(questionId)),
        addAnswer: (questionId, value) => dispatch(addAnswer(questionId, value)),
        incrementAnswerUps: (answerId) => dispatch(incrementAnswerUps(answerId)),
        incrementAnswerDowns: (answerId) => dispatch(incrementAnswerDowns(answerId)),
        addComment: (value, parent) => dispatch(addComment(value, parent)),
        incrementCommentUps: (commentId) => dispatch(incrementCommentUps(commentId)),
        incrementCommentDowns: (commentId) => dispatch(incrementCommentDowns(commentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
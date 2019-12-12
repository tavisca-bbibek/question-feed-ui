import React, {Component} from 'react';

import CommentContainer from './CommentContainer';

class Question extends Component{

    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
        this.updateNewCommentValue = this.updateNewCommentValue.bind(this);
        this.toggleCommentBoxCollapsed = this.toggleCommentBoxCollapsed.bind(this);
    }

    state = {
        commentBoxCollapsed: true,
        newCommentValue: ''
    }

    addComment(){
        let questionId = this.props.question.id;
        let value = this.state.newCommentValue;
        this.props.addComment(questionId, value);
    }

    updateNewCommentValue(value){
        this.setState({newCommentValue: value});
    }

    toggleCommentBoxCollapsed(){
        this.setState({commentBoxCollapsed: !this.state.commentBoxCollapsed});
    }

    getComments(){
        let comments = [];
        this.props.question.comments.forEach(v => comments.push(v));
        return comments;
    }

    render(){
        return (
           <div className="container question-element">
                <span>{this.props.question.id}. {this.props.question.value}</span><br/>
                <span>U: {this.props.question.ups}</span>
                <span> D: {this.props.question.downs}</span><br />
                <button style={{marginRight: '10px'}} onClick={this.props.incrementUps}>Up</button>
                <button onClick={this.props.incrementDowns}>Down</button><br />
                
                {this.state.commentBoxCollapsed ?
                    (<button onClick={this.toggleCommentBoxCollapsed}>Add Comment</button>)
                    :(<div className="comment-box">
                        <input type='text' placeholder="Your comment"  value={this.newCommentValue}
                            style={{marginRight: '10px'}} 
                            onChange={(event) => this.updateNewCommentValue(event.target.value)}/>
                    <button onClick={() => { 
                        this.addComment(); this.toggleCommentBoxCollapsed();
                    }}>Ok</button>
                    </div>)
                }

                <CommentContainer 
                    comments={this.getComments() }
                    incrementUps={(commentId) => this.props.incrementCommentUps(this.props.question.id, commentId)}
                    incrementDowns={(commentId) => this.props.incrementCommentDowns(this.props.question.id, commentId)}
                 />
           </div>
        );
    }
}

export default Question;
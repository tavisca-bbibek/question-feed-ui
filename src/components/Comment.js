import React, {Component} from 'react';
import CommentContainer from './CommentContainer';
class Comment extends Component {

    state = {
        commentBoxCollapsed: true,
        newCommentValue: ''
    }

    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
        this.updateNewCommentValue = this.updateNewCommentValue.bind(this);
        this.toggleCommentBoxCollapsed = this.toggleCommentBoxCollapsed.bind(this);
    }


    addComment(){
        let commentId = this.props.comment.id;
        let value = this.state.newCommentValue;
        this.props.addComment(commentId, value);
    }

    updateNewCommentValue(value){
        this.setState({newCommentValue: value});
    }

    toggleCommentBoxCollapsed(){
        this.setState({commentBoxCollapsed: !this.state.commentBoxCollapsed});
    }

    getComments(){
        let comments = [];
        this.props.comment.comments.forEach(v => comments.push(v));
        return comments;
    }

    render(){
        return (
            <div className="container comment-element">
                <span>{this.props.comment.value}</span><br/>
                <span>U: {this.props.comment.ups}</span>
                <span> D: {this.props.comment.downs}</span><br/>
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
                <CommentContainer comments={this.getComments()} /> 
           </div>
        );
    }
}

export default Comment;
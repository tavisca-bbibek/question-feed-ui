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
        let value = this.state.newCommentValue;
        this.props.addComment(value);
        this.setState({newCommentValue: ''});
    }

    updateNewCommentValue(value){
        this.setState({newCommentValue: value});
    }

    toggleCommentBoxCollapsed(){
        this.setState({commentBoxCollapsed: !this.state.commentBoxCollapsed});
    }

    render(){
        return (
            <div className="comment flat-card">
                <span>{this.props.value}</span><br/>
                <div class="subtitle">
                    <span>{this.props.ups}</span><span> ------ </span>
                    <span>{this.props.downs}</span>
                </div>
                <hr />
                <button style={{marginRight: '10px'}} onClick={this.props.incrementUps}>Up</button>
                <button onClick={this.props.incrementDowns}>Down</button><br />

                {this.state.commentBoxCollapsed ?
                    (<button onClick={this.toggleCommentBoxCollapsed}>Comment</button>)
                    :(<div className="comment-box">
                        <input type='text' placeholder="Your comment"  value={this.newCommentValue}
                            style={{marginRight: '10px'}} 
                            onChange={(event) => this.updateNewCommentValue(event.target.value)}/>
                    <button onClick={() => { 
                        this.addComment(); this.toggleCommentBoxCollapsed();
                    }}>Ok</button>
                    </div>)

                }
                <CommentContainer comments={this.props.comments}
                    addComment = {this.props.addComment}
                    incrementCommentUps={this.props.incrementCommentUps}
                    incrementCommentDowns={this.props.incrementCommentDowns}
                />  
           </div>
        );
    }
}

export default Comment;
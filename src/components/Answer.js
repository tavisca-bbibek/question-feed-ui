import React, {Component} from 'react';
import CommentContainer from './CommentContainer';
class Answer extends Component {

    state = {
        commentBoxCollapsed: true,
        comment: ''
    }

    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.toggleCommentBoxCollapsed = this.toggleCommentBoxCollapsed.bind(this);
    }


    addComment(){
        let value = this.state.comment;
        this.props.addComment(value);
        this.setState({comment: ''});
    }

    updateComment(value){
        this.setState({comment: value});
    }

    toggleCommentBoxCollapsed(){
        this.setState({commentBoxCollapsed: !this.state.commentBoxCollapsed});
    }

    render(){
        return (
            <div className="answer flat-card">
                <span>{this.props.value}</span><br/>
                <div className="subtitle">
                    <span>{this.props.ups}</span><span> ------ </span>
                    <span>{this.props.downs}</span>
                </div>
                <hr />
                <button style={{marginRight: '10px'}} onClick={this.props.incrementUps}>Up</button>
                <button onClick={this.props.incrementDowns}>Down</button><br />

                {this.state.commentBoxCollapsed ?
                    (<button onClick={this.toggleCommentBoxCollapsed}>Comment</button>)
                    :(<div className="comment-box">
                        <input type='text' placeholder="Your comment"  value={this.comment}
                            style={{marginRight: '10px'}} 
                            onChange={(event) => this.updateComment(event.target.value)}/>
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

export default Answer;
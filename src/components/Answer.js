import React, {Component} from 'react';
import CommentContainer from './CommentContainer';
class Answer extends Component {

    state = {
        commentBoxCollapsed: true,
        comment: '',
        contentsCollapsed: false
    }

    constructor(props){
        super(props);
        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.toggleCommentBoxCollapsed = this.toggleCommentBoxCollapsed.bind(this);
        this.toggleContentsCollapsed = this.toggleContentsCollapsed.bind(this);
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
              class="fas fa-comment-dots control-icon"
              onClick={this.toggleCommentBoxCollapsed}
            ></i>
            {this.props.comments.length > 0 &&
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

        const commentBox = (
          <div className="response-box">
            <input
              type="text"
              placeholder="Your Comment"
              value={this.answer}
              style={{ marginRight: "10px" }}
              onChange={event => this.updateComment(event.target.value)}
              onKeyPress={event => {
                if(event.keyCode == 13 || event.which == 13){
                    this.addComment();
                    this.toggleCommentBoxCollapsed();
                }
            }}
            />
            <button
              onClick={() => {
                this.addComment();
                this.toggleCommentBoxCollapsed();
              }}
            >Comment</button>
          </div>
        );

        return (
          <div className="flat-card">
            <p className="answer">{this.props.value}</p>
            {this.state.commentBoxCollapsed ? controls : commentBox}
            {!this.state.contentsCollapsed && (
              <CommentContainer
                comments={this.props.comments}
                addComment={this.props.addComment}
                incrementCommentUps={this.props.incrementCommentUps}
                incrementCommentDowns={this.props.incrementCommentDowns}
              />
            )}
          </div>
        );
    }
}

export default Answer;
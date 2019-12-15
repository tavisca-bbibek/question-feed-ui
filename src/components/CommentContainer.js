import React, {Component} from 'react';

import Comment from './Comment';
import { PARENT_COMMENT } from '../redux/feed/feedTypes';

class CommentContainer extends Component {

    generateParent(id){
        return {
            type: PARENT_COMMENT,
            id
        }
    }
    render(){
        return (
            <div className="comment-container">
                {
                    this.props 
                    && this.props.comments 
                    && this.props.comments.map(comment => <Comment 
                        key={comment.id}
                        {...comment}
                        addComment={(value, parent = this.generateParent(comment.id)) =>  this.props.addComment(value, parent)}
                        incrementUps={_=> this.props.incrementCommentUps(comment.id)}
                        incrementDowns={_=> this.props.incrementCommentDowns(comment.id)}
                        incrementCommentUps={this.props.incrementCommentUps}
                        incrementCommentDowns={this.props.incrementCommentDowns}
                        />)
                }
            </div>
        );
    }
}

export default CommentContainer;
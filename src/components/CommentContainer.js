import React, {Component} from 'react';

import Comment from './Comment';

class CommentContainer extends Component {
    
    render(){
        return (
            <div className="comment-container">
                {
                    this.props 
                    && this.props.comments 
                    && this.props.comments.map(comment => <Comment 
                        key={comment.id}
                        comment={comment}
                        addComment={_=> this.props.addComment(comment.id)}
                        incrementUps={_=> this.props.incrementUps(comment.id)}
                        incrementDowns={_=> this.props.incrementDowns(comment.id)}
                        />)
                }
            </div>
        );
    }
}

export default CommentContainer;
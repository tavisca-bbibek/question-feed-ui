import React, {Component} from 'react';

import Answer from './Answer';
import {PARENT_ANSWER} from '../redux/feed/feedTypes';

class AnswerContainer extends Component {

    generateParent(id){
        return {
            type: PARENT_ANSWER,
            id
        }
    }
    
    render(){
        return (
            <div className="comment-container">
                {
                    this.props 
                    && this.props.answers 
                    && this.props.answers.map(answer => <Answer 
                        key={answer.id}
                        {...answer}
                        addComment={(value, parent = this.generateParent(answer.id)) => this.props.addComment(value, parent)}
                        incrementUps={_=> this.props.incrementAnswerUps(answer.id)}
                        incrementDowns={_=> this.props.incrementAnswerDowns(answer.id)}
                        />)
                }
            </div>
        );
    }
}

export default AnswerContainer;
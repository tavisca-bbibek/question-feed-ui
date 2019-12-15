import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addQuestion} from '../redux';

class QuestionAdder extends Component {

    constructor(props){
        super(props);
        this.toggleAdderCollapsed = this.toggleAdderCollapsed.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }

    state = {
        adderCollapsed: true,
        newQuestionValue: ''
    }

    toggleAdderCollapsed(){
        this.setState({adderCollapsed: !this.state.adderCollapsed});
    }

    addQuestion(){
        let value = this.state.newQuestionValue;
        this.props.addQuestion(value);
        this.setState({newQuestionValue: ''});
    }

    updateNewQuestionValue(value){
        this.setState({newQuestionValue: value});
    }

    render(){
        return (
            <div className="question-adder">
               { this.state.adderCollapsed ?
                (<span onClick={this.toggleAdderCollapsed}>+</span>)
                :(<div className='question-box'>
                    <input type='text' style={{marginRight: '10px'}} placeholder="Your Question"  value={this.newQuestionValue} 
                        onChange={(event) => this.updateNewQuestionValue(event.target.value)}/>
                <button onClick={() => { 
                    this.addQuestion(); this.toggleAdderCollapsed();
                }}>Ok</button>
                </div>)
                }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (value) => { dispatch(addQuestion(value))}
    };
}

export default connect(null, mapDispatchToProps)(QuestionAdder);
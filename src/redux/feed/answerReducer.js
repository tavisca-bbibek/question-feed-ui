import {
    ADD_ANSWER,
    ADD_COMMENT,
    INCREMENT_ANSWER_UPS,
    INCREMENT_ANSWER_DOWNS
} from './feedTypes';

const initialState = {
    nextAnswerId: 0,
    answers: new Map()
}


const generateAnswer = (id, value) =>{
    return {
        id, value,
        ups: 0,
        downs: 0,
        commentIds: []
    }
}

const answerReducer = (state = initialState, action) => {

    let answerId;

    switch(action.type){
        case ADD_ANSWER:
            const value = action.payload.value;
            answerId = state.nextAnswerId++;
            state.answers.set(answerId, generateAnswer(answerId, value));
            action.payload.answerId = answerId;

            return {...state};
        
        case ADD_COMMENT:
            answerId = action.payload.answerId;
            if(answerId === undefined)
                return state;
            
            const commentId = action.payload.commentId;
            const answer = state.answers.get(answerId);
            answer.commentIds.push(commentId);

            return {...state};

        case INCREMENT_ANSWER_UPS:
            answerId = action.payload;
            state.answers.get(answerId).ups++;

            return {...state};
            
        case INCREMENT_ANSWER_DOWNS:
            answerId = action.payload;
            state.answers.get(answerId).downs++;
            
            return {...state};

        default:
            return state;
    }
}

export default answerReducer;


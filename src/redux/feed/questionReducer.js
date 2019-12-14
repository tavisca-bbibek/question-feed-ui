import {
ADD_QUESTION, 
ADD_ANSWER,
INCREMENT_QUESTION_UPS,
INCREMENT_QUESTION_DOWNS
} from './feedTypes';

const initialState = {
    nextQuestionId: 0,
    questions: new Map()
}

const generateQuestion = (id, value) =>{
    return {
        id, value,
        ups: 0,
        downs: 0,
        answerIds: []
    }
}

const questionReducer = (state = initialState, action) => {
    
    let questionId;

    switch(action.type){
        case ADD_QUESTION:
            questionId = state.nextQuestionId++;
            state.questions.set(questionId, generateQuestion(questionId, action.payload));
            return {...state};

        case ADD_ANSWER:
            questionId = action.payload.questionId;
            const answerId = action.payload.answerId;

            const question = state.questions.get(questionId);
            question.answerIds.push(answerId);

            return {...state};

        case INCREMENT_QUESTION_UPS:
            questionId = action.payload;
            state.questions.get(questionId).ups++;

            return {...state};
        
        case INCREMENT_QUESTION_DOWNS:
            questionId = action.payload;
            state.questions.get(questionId).downs++;
            
            return {...state};

        default:
            return state;
    }
}

export default questionReducer;
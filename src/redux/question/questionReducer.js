import {
ADD_QUESTION, 
ADD_COMMENT,
INCREMENT_QUESTION_UPS,
INCREMENT_QUESTION_DOWNS,
INCREMENT_COMMENT_UPS,
INCREMENT_COMMENT_DOWNS
} from './questionTypes';

const initialState = {
    nextQuestionId: 0,
    questions: new Map()
}

const generateQuestion = (id, value) =>{
    return {
        id, value,
        ups: 0,
        downs: 0,
        comments: new Map(),
        nextCommentId: 0
    }
}

const generateComment = (id, value) => {
    return {
        id, value,
        ups: 0,
        downs: 0,
        comments: new Map()
    }
}

const questionReducer = (state = initialState, action) => {
    let questionId;
    let commentId;

    switch(action.type){
        case ADD_QUESTION:
            questionId = state.nextQuestionId++;
            state.questions.set(questionId, generateQuestion(questionId, action.payload));
            return {...state};
        case ADD_COMMENT:
                questionId = action.payload.questionId;
                const value = action.payload.value;

                const question = state.questions.get(questionId);
                const nextCommentId = question.nextCommentId++;
                question.comments.set(nextCommentId, generateComment(nextCommentId, value));

             return {...state};

        case INCREMENT_QUESTION_UPS:
            questionId = action.payload;
            state.questions.get(questionId).ups++;

            return {...state};
        
        case INCREMENT_QUESTION_DOWNS:
                questionId = action.payload;
                state.questions.get(questionId).downs++;
                
                return {...state};

        case INCREMENT_COMMENT_UPS:
            questionId = action.payload.questionId;
            commentId = action.payload.commentId;
            state.questions.get(questionId).comments.get(commentId).ups++;
            
            return {...state};

        case INCREMENT_COMMENT_DOWNS:
                questionId = action.payload.questionId;
                commentId = action.payload.commentId;
                state.questions.get(questionId).comments.get(commentId).downs++;
                
                return {...state};
        default:
            return state;
    }
}

export default questionReducer;
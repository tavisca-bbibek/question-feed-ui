import {
    ADD_QUESTION, 
    ADD_COMMENT, 
    INCREMENT_QUESTION_UPS,
    INCREMENT_QUESTION_DOWNS,
    INCREMENT_COMMENT_UPS,
    INCREMENT_COMMENT_DOWNS
} from './questionTypes';

export const addQuestion = (value) => {
    return {
        type: ADD_QUESTION,
        payload: value
    };
}

export const addComment = (questionId, value) => {
    return {
        type: ADD_COMMENT,
        payload: {questionId, value}
    }
}

export const incrementQuestionUps = (questionId) => {
    return {
        type: INCREMENT_QUESTION_UPS,
        payload: questionId
    }
}

export const incrementQuestionDowns = (questionId) => {
    return {
        type: INCREMENT_QUESTION_DOWNS,
        payload: questionId
    }
}

export const incrementCommentUps = (questionId, commentId) => {
    return {
        type: INCREMENT_COMMENT_UPS,
        payload: {questionId, commentId}
    }
}

export const incrementCommentDowns = (questionId, commentId) => {
    return {
        type: INCREMENT_COMMENT_DOWNS,
        payload: {questionId, commentId}
    }
}
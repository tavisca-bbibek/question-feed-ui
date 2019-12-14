import {
    ADD_QUESTION, 
    INCREMENT_QUESTION_UPS,
    INCREMENT_QUESTION_DOWNS,
} from './feedTypes';

export const addQuestion = (value) => {
    return {
        type: ADD_QUESTION,
        payload: value
    };
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
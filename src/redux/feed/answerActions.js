import {
    ADD_ANSWER, 
    INCREMENT_ANSWER_UPS,
    INCREMENT_ANSWER_DOWNS
} from './feedTypes';

export const addAnswer = (questionId, value) => {
    return {
        type: ADD_ANSWER,
        payload: {questionId, value}
    }
}

export const incrementAnswerUps = (answerId) => {
    return {
        type: INCREMENT_ANSWER_UPS,
        payload: answerId
    }
}

export const incrementAnswerDowns = (answerId) => {
    return {
        type: INCREMENT_ANSWER_DOWNS,
        payload: answerId
    }
}
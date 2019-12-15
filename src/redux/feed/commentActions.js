import {
    ADD_COMMENT, 
    INCREMENT_COMMENT_UPS,
    INCREMENT_COMMENT_DOWNS
} from './feedTypes';

export const addComment = (value, parent) => {
    return {
        type: ADD_COMMENT,
        payload: {[parent.type+'Id']: parent.id, value}
    }
}

export const incrementCommentUps = (commentId) => {
    return {
        type: INCREMENT_COMMENT_UPS,
        payload: commentId
    }
}

export const incrementCommentDowns = (commentId) => {
    return {
        type: INCREMENT_COMMENT_DOWNS,
        payload: commentId
    }
}
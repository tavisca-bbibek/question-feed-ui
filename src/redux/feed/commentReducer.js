import {
    ADD_COMMENT,
    INCREMENT_COMMENT_UPS,
    INCREMENT_COMMENT_DOWNS
} from './feedTypes';

const initialState = {
    nextCommentId: 0,
    comments: new Map()
}

const generateComment = (id, value) =>{
    return {
        id, 
        value,
        ups: 0,
        downs: 0,
        commentIds: []
    }
}

const commentReducer = (state = initialState, action) => {

    let commentId;

    switch(action.type){
        case ADD_COMMENT:
            const value = action.payload.value;
            const parentId = action.payload.commentId;
            
            commentId = state.nextCommentId++;
            state.comments.set(commentId, generateComment(commentId, value));

            if(parentId === undefined){
                 action.payload.commentId = commentId;
            }else{
                    console.log(parentId, state.comments);
                    state.comments.get(parentId).commentIds.push(commentId);
                }

            return {...state};
    
        case INCREMENT_COMMENT_UPS:
            commentId = action.payload;
            state.answers.get(commentId).ups++;

            return {...state};
            
        case INCREMENT_COMMENT_DOWNS:
            commentId = action.payload;
            state.answers.get(commentId).downs++;
            
            return {...state};

        default:
            return state;
    }
}

export default commentReducer;

import {combineReducers} from 'redux';

import questionReducer from './feed/questionReducer';
import answerReducer from './feed/answerReducer';
import commentReducer from './feed/commentReducer';

const reducer =  combineReducers({
    comment: commentReducer,
    answer: answerReducer,
    question: questionReducer
});

export default reducer;
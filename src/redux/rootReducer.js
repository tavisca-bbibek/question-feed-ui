import {combineReducers} from 'redux';

import questionReducer from './question/questionReducer';

const reducer =  combineReducers({
    question: questionReducer
});

export default reducer;
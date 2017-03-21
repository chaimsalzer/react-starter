import { combineReducers } from 'redux';
import ReducerA from './reducer_a';

const rootReducer = combineReducers({
    data: ReducerA
});

export default rootReducer;

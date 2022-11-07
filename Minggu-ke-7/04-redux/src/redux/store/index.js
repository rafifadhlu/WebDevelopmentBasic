
import {createStore, combineReducers} from 'redux';
import todoReducer from '../reducer/todoReducer';

const allReducers = combineReducers({
    todo:todoReducer,
})

const store = createStore(allReducers)

export default store
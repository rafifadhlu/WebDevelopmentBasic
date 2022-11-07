import {createStore, combineReducers, applyMiddleware} from 'redux'; 
import thunk  from 'redux-thunk';
import todoReducer from '../reducer/todoReducer';



const allReducers = combineReducers({ 
    todo:todoReducer,
})

const store = createStore(allReducers, applyMiddleware(thunk))

export default store
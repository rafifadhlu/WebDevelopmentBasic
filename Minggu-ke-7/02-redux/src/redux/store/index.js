import {combineReducers,createStore} from 'redux';
import counterReducer from '../reducer/counterReducer';
// import todoReducer from '../reducer/todoReducer';


const allReducers = combineReducers({
    counter : counterReducer,
    // todo : todoReducer
})

const store = createStore(allReducers);

export default store;
import { combineReducers, createStore } from 'redux'
import gameReducer from './reducers/gameReducer';


const rootReducers = combineReducers({
    gameReducer
})


const store = createStore(rootReducers);

export default store;
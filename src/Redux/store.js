import {createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './combineReducer';
const initialState ={};
const  middleWare = [thunk];

const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleWare),
        // other store enhancers if any
      )
)

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

//All reducers
//reducer for Feelings Component
const feelingsReducer = (state = '', action) => {
    if (action.type === 'FEELINGS') {
        return action.payload
    }
    return state;
}
//reducer for Understanding Component
const understandingReducer = (state = '', action) => {
    if (action.type === 'UNDERSTANDING') {
        return action.payload
    }
    return state;
}
//reducer for Supported Component
const supportedReducer = (state = '', action) => {
    if (action.type === 'SUPPORTED') {
        return action.payload
    }
    return state;
}
//reducer for Comments Component
const commentsReducer = (state = '', action) => {
    if (action.type === 'COMMENTS') {
        return action.payload
    }
    return state;
}

//Reducers to store
const store = createStore(
    combineReducers({
        feelingsReducer,  
        understandingReducer,
        supportedReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

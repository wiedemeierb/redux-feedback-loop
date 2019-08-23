import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';


//reducer for Feelings Component
const feelingsReducer = (state = '', action) => {
    if (action.type === 'FEELINGS') {
        return action.payload
    }
    return state;
}


const store = createStore(
    combineReducers({
        feelingsReducer,  
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

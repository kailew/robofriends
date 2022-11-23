import React from 'react';
import { ReactDOM } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { creatLogger } from 'redux-logger';
import { thunkMiddleware } from 'redux-thunk'
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';
const root = createRoot(document.getElementById('root'));
root.render(<App />);

const logger = creatLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
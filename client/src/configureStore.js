import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import apiMiddleware from './middleware/api';

const configureStore = (history, initialState = {}) => {

    const middlewares = [
        thunk,
        apiMiddleware,
        routerMiddleware(history)
    ];

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;
};

export default configureStore;

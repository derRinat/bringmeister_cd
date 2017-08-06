import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import loading from './loading';
import products from './products';

const rootReducer = combineReducers({
    routing,
    loading,
    products
});

export default rootReducer;

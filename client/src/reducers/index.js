import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import loading from './loading';
import products from './products';
import product from './product';

const rootReducer = combineReducers({
    routing,
    loading,
    products,
    product
});

export default rootReducer;

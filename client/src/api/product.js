import * as ProductActions from '../constants/actions/productActionTypes';
import * as Methods from '../constants/methods';
import { API_LOAD_PRODUCTS, API_LOAD_ONE_PRODUCT } from '../configs/api';
import { API_CALL } from '../configs/common';

import Url from '../utils/url';

export const loadProducts = (data) => ({
    [API_CALL]: {
        method: Methods.GET,
        endpoint: Url.compose(API_LOAD_PRODUCTS, data),
        types: [
            ProductActions.LOAD_PRODUCTS_REQUEST,
            ProductActions.LOAD_PRODUCTS_SUCCESS,
            ProductActions.LOAD_PRODUCTS_FAILURE
        ]
    }
});

export const loadOneProduct = (data) => ({
    [API_CALL]: {
        method: Methods.GET,
        endpoint: Url.compose(API_LOAD_ONE_PRODUCT, data),
        types: [
            ProductActions.LOAD_ONE_PRODUCT_REQUEST,
            ProductActions.LOAD_ONE_PRODUCT_SUCCESS,
            ProductActions.LOAD_ONE_PRODUCT_FAILURE
        ]
    }
});

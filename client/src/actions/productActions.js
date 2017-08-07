import * as ProductActions from "../constants/actions/productActionTypes";
import * as API from '../api/product';

export const loadProducts = (data) => async dispatch => await dispatch(API.loadProducts(data));
export const loadOneProduct = (data) => async dispatch => await dispatch(API.loadOneProduct(data));

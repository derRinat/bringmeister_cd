
import * as ProductActions from "../constants/actions/productActionTypes";

const products = (state = [], action) => {

    switch (action.type) {
        case ProductActions.LOAD_PRODUCTS_REQUEST:
            return state;
        case ProductActions.LOAD_PRODUCTS_SUCCESS:
            return action.data;
        case ProductActions.LOAD_PRODUCTS_FAILURE:
            return [];
        default:
            return state;
    }
}

export default products;

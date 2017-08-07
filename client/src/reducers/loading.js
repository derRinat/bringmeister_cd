
import * as ProductActions from "../constants/actions/productActionTypes";

const loading = (state = false, action) => {

    switch (action.type) {
        case ProductActions.LOAD_PRODUCTS_REQUEST:
        case ProductActions.LOAD_ONE_PRODUCT_REQUEST:
            return true;
        case ProductActions.LOAD_PRODUCTS_SUCCESS:
        case ProductActions.LOAD_PRODUCTS_FAILURE:
        case ProductActions.LOAD_ONE_PRODUCT_SUCCESS:
        case ProductActions.LOAD_ONE_PRODUCT_FAILURE:
            return false;
        default:
            return state;
    }
}

export default loading;

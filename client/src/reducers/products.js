
import * as ProductActions from "../constants/actions/productActionTypes";

const products = (state = [], action) => {

    switch (action.type) {
        case ProductActions.LOAD_PRODUCTS_SUCCESS:
            if(action.data.products && action.data.products.length) {
                return action.data.products;
            }
            return state
        case ProductActions.LOAD_PRODUCTS_REQUEST:
        case ProductActions.LOAD_PRODUCTS_FAILURE:
        default:
            return state;
    }
}

export default products;

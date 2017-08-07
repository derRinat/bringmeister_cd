
import * as ProductActions from "../constants/actions/productActionTypes";

const product = (state = {}, action) => {

    switch (action.type) {
        case ProductActions.LOAD_ONE_PRODUCT_SUCCESS:
            return action.data;
        case ProductActions.LOAD_ONE_PRODUCT_REQUEST:
        case ProductActions.LOAD_ONE_PRODUCT_FAILURE:
        default:
            return state;
    }
}

export default product;

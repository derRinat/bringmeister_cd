
import * as ProductActions from "../constants/actions/productActionTypes";

const loading = (state = false, action) => {

    switch (action.type) {
        case ProductActions.LOAD_PRODUCTS_REQUEST:
            return true;
        case ProductActions.LOAD_PRODUCTS_SUCCESS:
        case ProductActions.LOAD_PRODUCTS_FAILURE:
        default:
            return state;
    }
}

export default loading;

import * as ProductActions from "../constants/actions/productActionTypes";

export const loadProducts = () => dispatch => {
    dispatch({
        type: ProductActions.LOAD_PRODUCTS_SUCCESS,
        data: [
            {
                id: 1,
                name: "Product 1",
                price: "100"
            },
            {
                id: 2,
                name: "Product 2",
                price: "100"
            },
            {
                id: 3,
                name: "Product 3",
                price: "100"
            }
        ]
    })
};

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

    render() {
        return(
            <div>
                <div>Product page</div>
                <Link to="/">Catalog link</Link>
            </div>
        )
    }
}

export default Product;

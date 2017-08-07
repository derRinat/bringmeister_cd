import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductList = ({ data }) => (
    <section className="products">
        { data.length > 0 && data.map(product =>
            <Product data={ product} key={ product.id }/>
        )}
    </section>
)

ProductList.propTypes = {
    data: PropTypes.array.isRequired
}

module.exports = ProductList;

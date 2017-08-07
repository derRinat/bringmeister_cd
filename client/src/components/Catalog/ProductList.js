import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Locale from '../../utils/locale';
import Product from './Product';

const ProductList = ({ data }) => (
    <section className="products">
        { data.length > 0 && data.map(product =>
            <Product data={ product} key={ product.id }/>
        )
        ||
        <p>{ Locale.trans('CATALOG_EMPTY_LIST') }</p>
        }
    </section>
)

ProductList.propTypes = {
    data: PropTypes.array.isRequired
}

module.exports = ProductList;

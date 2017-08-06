import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadProducts } from '../actions/productActions';

import ProductList from '../components/Catalog/ProductList';

class Catalog extends Component {

    componentDidMount() {
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {

        const { products } = this.props;

        return(
            <div>
                <div>Catalog page</div>
                <ProductList data = { products } />
            </div>
        )
    }
}

Catalog.propTypes = {
    loading: PropTypes.bool,
    products: PropTypes.array,
    loadProducts: PropTypes.func,
};

const mapStateToProps = ({ loading, products }) => {
    return {
        loading,
        products
    };
};

export default connect(mapStateToProps, {
    loadProducts
})(Catalog);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadProducts } from '../actions/productActions';

import Loading from '../components/Common/Loading';
import ProductList from '../components/Catalog/ProductList';
import { DEFAULT_ZIPCODE } from '../configs/common';

class Catalog extends Component {

    componentDidMount() {
        const { products, loadProducts } = this.props;

        if(!products.length) {
            const zipcode = DEFAULT_ZIPCODE;
            loadProducts({ zipcode });
        }
    }

    render() {

        const { products, loading } = this.props;

        if(loading) {
            return <Loading />
        }

        return(
            <ProductList data = { products } />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadOneProduct } from '../actions/productActions';

import Loading from '../components/Common/Loading';
import ProductInfo from '../components/Detail/ProductInfo';
import { DEFAULT_ZIPCODE } from '../configs/common';

class Detail extends Component {

    componentDidMount() {
        const { match: { params: { product }}, loadOneProduct} = this.props;
        const zipcode = DEFAULT_ZIPCODE;
        loadOneProduct({ product, zipcode});
    }

    onClick(product) {
        alert(`Add to cart product ${product}`);
    }

    render() {

        const { product, loading } = this.props;

        if(loading || !Object.keys(product).length) {
            return <Loading />
        }
        
        return(
            <div>
                <div className="detail">
                    <ProductInfo data = { product } onClick={ this.onClick.bind(this)}/>
                </div>
            </div>

        )
    }
}

Detail.propTypes = {
    loading: PropTypes.bool,
    product: PropTypes.object,
    loadOneProduct: PropTypes.func,
};

const mapStateToProps = ({ loading, product }) => {
    return {
        loading,
        product
    };
};

export default connect(mapStateToProps, {
    loadOneProduct
})(Detail);

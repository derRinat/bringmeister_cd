import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Locale from '../../utils/locale';

class Product extends Component {

    get getImage() {
        const { data: { images: { list }}} = this.props;
        return list[100]; // Bad...
    }

    render() {

        const { data } = this.props;

        return(
            <div className="product-card">
                <div className="text-center">
                    <img src={ this.getImage } alt={ data.name }/>
                </div>
                <div className="info">
                    <p>{ data.name }</p>
                    <span>{ data.prices.price } &euro;</span>
                </div>

                <Link to={ "/detail/" + data.id } className="btn btn-green">{ Locale.trans('CATALOG_MORE') }</Link> 
            </div>
        )
    }
}

Product.propTypes = {
    data: PropTypes.object.isRequired
}

export default Product;

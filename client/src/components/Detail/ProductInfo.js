import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Form/Button';

import Locale from '../../utils/locale';

class ProductInfo extends Component {

    _onClick() {
        const { data, onClick } = this.props;
        onClick && onClick(data.id);
    }

    render() {

        const { data } = this.props;

        return(
            <div className="product-card">
                <img src={ data.images.detail[0][268] } alt={ data.name } />

                <div className="info">
                    <h3>{ data.name }</h3>
                    <p className="articul">{ Locale.trans('DETAIL_ARTICUL') } { data.sku }</p>

                    { data.ingredients.text &&
                        <p>{ data.ingredients.text }</p>
                    }
                    <p className="price">{ data.prices.price } &euro;</p>
                </div>

                <Button
                    onClick={ this._onClick.bind(this) }
                    title={ Locale.trans('DETAIL_ADD_TO_CART') }
                    color="green"
                />
                <Link to="/catalog" className="btn-red">{ Locale.trans('DETAIL_BACK_TO_CATALOG') } </Link>
        </div>
        )
    }
}

ProductInfo.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default ProductInfo;

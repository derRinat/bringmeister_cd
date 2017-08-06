import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ data }) => (
    <div>
        { data &&
            <div>
                { data.map(product =>
                    <div key={ product.id }>
                        <h3>{ product.name }</h3>
                        <p>Price: { product.price }</p>
                    </div>
                )}
            </div>
        }
    </div>
);

ProductList.propTypes = {
    data: PropTypes.array.isRequired
}

module.exports = ProductList;

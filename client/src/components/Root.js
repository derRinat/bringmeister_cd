import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Routers from './Routers';

const Root = ({ store, history }) => (

    <Provider store={ store }>
        <div>
            <Routers />
        </div>
    </Provider>

);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;

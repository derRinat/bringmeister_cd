import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Catalog extends Component {

    render() {
        return(
            <div>
                <div>Catalog page</div>
                <Link to="/detail/123">Product link</Link>
            </div>
        )
    }
}

export default Catalog;

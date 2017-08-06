import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Catalog from '../containers/Catalog';
import Product from '../containers/Product';

const Routers = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Catalog } />
            <Route path="/catalog" component={ Catalog }/>
            <Route path="/detail/:product" component={ Product }/>
        </Switch>
    </BrowserRouter>
);

export default Routers;

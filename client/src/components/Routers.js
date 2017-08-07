import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Layout/Main';
import Catalog from '../containers/Catalog';
import Detail from '../containers/Detail';

const Routers = () => (
    <BrowserRouter>
        <Main>
            <Switch>
                <Route exact path="/" component={ Catalog } />
                <Route path="/catalog" component={ Catalog }/>
                <Route path="/detail/:product" component={ Detail }/>
            </Switch>
        </Main>
    </BrowserRouter>
);

export default Routers;

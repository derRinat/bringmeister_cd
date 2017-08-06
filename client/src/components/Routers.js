import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routers = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <div>App init</div> } /> 
        </Switch>
    </BrowserRouter>
);

export default Routers;

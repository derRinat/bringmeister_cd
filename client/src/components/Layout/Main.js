import React from 'react';

import Header from "./Header";

const Main = ({ customer, nav, children, logout }) => (
    <div className="main"> 
        <header>
            <Header />
        </header>

        <section className="content">
            { children }
        </section>
    </div>
);

export default  Main;

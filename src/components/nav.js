import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, Drawer, Navigation, Layout } from "react-mdl";

class Nav extends Component {
    render() {
        return(
            <Layout fixedHeader>
                <Header title="Food Order">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/checkout">Checkout</Link>
                        <Link to="/add-food">Add Food</Link>
                        <Link to="/add-promo">Add Promo</Link>
                        <Link to="/promo-list">Promo List</Link>
                    </Navigation>
                </Header>
                <Drawer title="Food Order">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/checkout">Checkout</Link>
                        <Link to="/add-food">Add Food</Link>
                        <Link to="/add-promo">Add Promo</Link>
                        <Link to="/promo-list">Promo List</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Nav;

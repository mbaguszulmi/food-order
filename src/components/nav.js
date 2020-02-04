import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, Drawer, Navigation, Layout } from "react-mdl";

class Nav extends Component {
    componentDidMount() {
        let drawer = document.querySelector('div.mdl-layout__drawer');
        let obfuscator = document.querySelector('div.mdl-layout__obfuscator');
        let drawerMenuItems = document.querySelectorAll('div.mdl-layout__drawer a.mdl-navigation__link');
        drawerMenuItems.forEach(element => {
            element.addEventListener('click', () => {
                drawer.classList.remove("is-visible");
                obfuscator.classList.remove("is-visible");
            })
        })
    }

    render() {
        return(
            <Layout fixedHeader>
                <Header title="Food Order">
                    <Navigation className="top-nav">
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

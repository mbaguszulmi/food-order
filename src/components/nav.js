import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, Drawer, Navigation} from "react-mdl";

class Nav extends Component {
    render() {
        return(
            <div>
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
            </div>
        );
    }
}

export default Nav;

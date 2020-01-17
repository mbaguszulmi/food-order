import React, { Component } from 'react';

class Checkout extends Component {
    componentDidMount() {
        document.title = "Check Out";
    }

    render() {
        return(
            <h1>Check Out</h1>
        );
    }
}

export default Checkout;
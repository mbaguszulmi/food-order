import React, { Component } from 'react';

class PromoList extends Component {
    componentDidMount() {
        document.title = "Promo List";
    }

    render() {
        return(
            <h1>Promo List</h1>
        );
    }
}

export default PromoList;
import React, { Component } from 'react';

class FoodList extends Component {
    componentDidMount() {
        document.title = "Food List";
    }

    render() {
        return(
            <h1>Food List</h1>
        );
    }
}

export default FoodList;
import React, { Component } from 'react';

class AddFood extends Component {
    componentDidMount() {
        document.title = "Add Food";
    }

    render() {
        return(
            <h1>Add Food</h1>
        );
    }
}

export default AddFood;
import React, { Component } from 'react';

class NotFoundPage extends Component {
    componentDidMount() {
        document.title = "Page Not Found";
    }

    render() {
        return(
            <h1>Page Not Found</h1>
        );
    }
}

export default NotFoundPage;
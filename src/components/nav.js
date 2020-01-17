import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Layout, Header, Drawer, Navigation} from "react-mdl";

class Nav extends Component {
    state = {}

    onLocationChange(location) {
        let hash = window.location.hash;
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        if (hash === "#/") {
            this.setState({
                activeIdx: 0
            })
        }
        else if (hash === "#/checkout") {
            this.setState({
                activeIdx: 1
            })
        }
        else if (hash === "#/add-food" || hash.indexOf("#/project") !== -1) {
            this.setState({
                activeIdx: 2
            })
        }
        else if (hash === "#/add-promo") {
            this.setState({
                activeIdx: 3
            })
        }
        else if (hash === "#/promo-list") {
            this.setState({
                activeIdx: 4
            })
        }
    }

    componentDidMount() {
        this.onLocationChange()
        window.addEventListener("hashchange", () => {
            this.onLocationChange()
        })
    }

    render() {
        return(
            <Layout fixedHeader>
                <Header title="Food Order">
                    <Navigation>
                        <Link class="active" to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                    </Navigation>
                </Header>
                <Drawer title="Food Order">
                    <Navigation>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                        <Link to="#">Link</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Nav;

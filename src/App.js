import React, { Component } from 'react';
import Nav from './components/nav'
import { Layout, Content } from "react-mdl";
import MainRoute from "./routes/main-route";
import { connect } from 'react-redux';
import { addFood } from './actions/addFood'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addFood: () => dispatch(addFood())
})

class App extends Component {
  render() {
    return(
      <div className="App">
        <Layout>
          <Nav />
          <Content>
            <MainRoute />
            <pre>
              {this.props}
            </pre>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

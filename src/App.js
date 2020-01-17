import React, { Component } from 'react';
import Nav from './components/nav'
import { Layout, Content, Button } from "react-mdl";
import MainRoute from "./routes/main-route";
import { connect } from 'react-redux';
import { addFood } from './actions/addFood'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addFood: (foodData) => dispatch(addFood(foodData))
})

class App extends Component {
  componentDidMount() {
    // this.props.addFood({foodName: "Pizza", price: 1990});
    // this.props.addFood({foodName: "Burger", price: 1000});
    console.log(this.props);
  }

  render() {
    return(
      <div className="App">
        <Layout>
          <Nav />
          <Content>
            <MainRoute />
            <pre>
              {JSON.stringify(this.props)}
            </pre>

            <Button raised accent ripple onClick={() => this.props.addFood({foodName: "Pizza", price: 1990})}>Button</Button>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

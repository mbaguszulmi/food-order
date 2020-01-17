import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/nav'
import { Layout, Content } from "react-mdl";
import MainRoute from "./routes/main-route";

class App extends Component {
  render() {
    return(
      <div className="App">
        <Layout>
          <Nav />
          <Content>
            <MainRoute />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

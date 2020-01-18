import React, { Component } from 'react';
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
            <div className="inner-content">
              <MainRoute />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

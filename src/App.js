import React from 'react';
import logo from './logo.svg';
import Nav from './components/nav'
import { Content } from "react-mdl";
import MainRoute from "./routes/main-route";

function App() {
  return (
    <div className="App">
      <Nav />
      <Content>
        <MainRoute />
      </Content>
    </div>
  );
}

export default App;

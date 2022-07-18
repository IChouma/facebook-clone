import './App.css';
import Nav from './components/nav/nav'
import Container from './components/container/container'
import React, { Component, Fragment } from 'react';


class App extends Component {
  render(){
  return (
  <Fragment>
    <Nav/>
    <Container/>
  </Fragment>

  )
}
}

export default App;


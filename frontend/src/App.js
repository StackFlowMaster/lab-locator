import logo from './logo.svg';
import './App.css';
import StudioCards from './containers/StudioCards'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setStudios } from './redux/actions'

class App extends Component  {

  componentDidMount(){
    this.props.setStudios()
  }

  render(){
    return (
      <>
        <h1>Lab Locator</h1>
        <StudioCards/>
      </>
    );
  }
}

export default connect(null, { setStudios })(App);
import logo from './full_logo.png'
import './App.css';
import StudioCards from './containers/StudioCards'
import StudioPage from './containers/StudioPage'
import Login from './components/Login'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setStudios } from './redux/studioActions'
import { autoLogin, logout } from './redux/userActions'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router';

class App extends Component  {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
    this.props.setStudios()
  }

  render(){
    return (
      <>
        <img className="logo" src={ logo } alt="Lab Locator"/>
        {this.props.user.id
        ?
        <>
          <button className="logout" onClick={ this.props.logout }>Logout</button>
          <Switch>
            <Route path="/studios/:id" component={ StudioPage } />
            <Route path="/studios" component={ StudioCards }/>
            <Redirect from="*" to={"/studios"}/>
          </Switch>
        </>
        :
          <Login/>
        }
      </>
    );
  }
}


const mapStateToProps = (state) => ({ user: state.user })

export default connect(mapStateToProps, { setStudios, autoLogin, logout })(App);


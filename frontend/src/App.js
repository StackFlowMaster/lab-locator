import logo from './full_logo.png';
import './App.css';
import StudioCards from './containers/StudioCards';
import StudioPage from './containers/StudioPage';
import Login from './components/Login';
import React, { useEffect } from 'react';
import { setStudios } from './redux/studioActions';
import { autoLogin, logout } from './redux/userActions';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const signOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    localStorage.token && dispatch(autoLogin());
    dispatch(setStudios());
  }, []);

  return (
    <>
      <img className="logo" src={ logo } alt="Lab Locator"/>
      {user.id
      ?
      <>
        <button className="logout" onClick={ signOut }>Logout</button>
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

export default App;

import React, { Component } from 'react';
import "./App.css";
import {BrowserRouter, Switch ,Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Logout from './Components/Logout';
class App extends Component{

render(){
  return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
        </BrowserRouter>
  );
}
}
export default App;
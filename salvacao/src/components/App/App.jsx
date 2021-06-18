import './App.css';
import React from 'react';
import { history } from './history'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Mapa from '../Pages/Mapa/Mapa';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Cadastro from '../Pages/Cadastro/Cadastro';
import Pets from '../Pages/Pets/Pets';
import Password from '../Pages/Password/Password';
import Pet from '../Pages/Pets/Pet';
import Delete from '../Delete/Delete';


const App = () => (
  
  <Router history={history}>
    <Navbar/>
    <Switch >
      <Route component={Home} exact path="/"/>
      <Route component={Mapa} exact path='/map'/>
      <Route component={Login} exact path="/login"/>
      <Route component={Profile} exact path="/profile"/>
      <Route component={Cadastro} exact path="/cadastro"/>
      <Route component={Pets} exact path="/pets" />
      <Route component={Password} exact path="/password"/>
      <Route component={Pet} exact path="/pet:id"/>
      <Route component={Delete} exact path="/delete"/>
    </Switch>
  </Router>
    

)

export default App;

import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Mapa from '../Pages/Mapa/Mapa';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Cadastro from '../Pages/Cadastro/Cadastro';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/map' component={Mapa}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/institution"/>
          <Route path="/cadastro" component={Cadastro}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

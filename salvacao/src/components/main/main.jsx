import React from 'react';
import Login from '../login/login';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/home';
import Mapa from '../mapa/mapa';
import Perfil from '../perfil/perfil';
import Instituicoes from '../instituicoes/instituicoes';
import Cadastro from '../login/cadastrar/cadastrar';


function Main(){

    return(
        
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/mapa' component={Mapa}/>
            <Route path='/perfil' component={Perfil}/>
            <Route path='/instituicoes' component={Instituicoes}/>
            <Route path='/cadastrar' component={Cadastro}/>
        </Switch>
        
    )
    
}

export default Main;
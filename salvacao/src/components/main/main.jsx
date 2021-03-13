import React from 'react';
import Login from '../login/login';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/home';


function Main() {

    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
            </Switch>
        </main>
    )

}

export default Main;
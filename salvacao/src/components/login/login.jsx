import React from 'react';
import './login.css'
import Topo from '../topo/topo';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <html>
            <Topo/>
            <div className="loginContainer">
                <div className="Forms">
                    <form className="form" action="">
                        <label className="label" for="user">Usuário: </label>
                        <input className="inputLogin"type="text" name="user"></input>
                        <label className="label" for="passwd">Senha: </label>
                        <input className="inputLogin" type="text" name="passwd"></input>
                        <div className="botoes">
                            <button className="btnLogar">Login</button>

                            <Link to="/cadastrar">
                                <button className="btnCadastrar">Cadastre-se</button>
                            </Link>
                            
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </html>
        
    )
}

export default Login;
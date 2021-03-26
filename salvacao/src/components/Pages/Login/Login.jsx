import React from 'react';
import './style/Login.css';
import { Link } from 'react-router-dom';


function Login(){

    return(
        <div className="container">
            <form action="" method="get">
                <div className="inputs">
                    <div className="user">
                        <label For="user">Usuário:</label>
                        <input type="text" name="user" id="user" placeholder="Digite seu usuário" required/>
                    </div>
                    
                    <div className="passwd">
                        <label For="passwd">Senha:</label>
                        <input type="password" name="passwd" id="passwd" placeholder="Digite sua senha" required/>
                    </div>
                </div>
                <div className="botoes">
                    <Link to="/cadastro" className="linkcad">
                        <button className="cadastro">Cadastrar-se</button>
                    </Link>
                    <Link to="/configuracoes" className="linkcad">
                        <button className="cadastro">Esqueci Minha senha</button>
                    </Link>
                    <div className="linkcad">
                        <button type="submit" className="cadastro-login"> Logar </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
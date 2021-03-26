import React from 'react';
import './style/Cadastro.css';


function Cadastro(){

    return(
        <div className="container">
            <form action="" method="post">

                <div className="inputs2">
                    <div className="name2">
                        <label For="name">Nome:</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome" required/>
                    </div>
                    
                    <div className="email2">
                        <label For="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu email" required/>
                    </div>

                    <div className="passwd2">
                        <label For="passwd">Senha:</label>
                        <input type="password" name="passwd" id="passwd" placeholder="Digite sua senha" required/>
                    </div>

                    <div className="passwd2">
                        <label For="passwd">Confirmar:</label>
                        <input type="password" name="passwd" id="passwd" placeholder="Confirme a senha" required/>
                    </div>
                </div>

                <div className="botao2">
                    <div className="linkcad2">
                        <button type="submit" className="cadastro-login"> Cadastrar </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastro;
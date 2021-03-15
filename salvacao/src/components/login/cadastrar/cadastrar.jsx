import React from 'react';
import Topo from '../../topo/topo';
import Footer from '../../footer/footer';
import './cadastro.css';

export default (props) => {
    return(

        <div className="container">
            <Topo/>
            <div className="formCadastro">
                <form action="" className="FormCadastro">
                    <label className="labelcadastro"for="email">Email:</label>
                    <input className="inputCadastro" type="text" name="email" required></input>
                    <label className="labelcadastro" for="user">Usuário: </label>
                    <input className="inputCadastro" type="text" name="user" required></input>
                    <label className="labelcadastro" for="passwd">Senha: </label>
                    <input className="inputCadastro" type="text" name="passwd" required></input>
                    <label className="labelcadastro" for="passwdcnf">Confirmar Senha: </label>
                    <input className="inputCadastro" type="text" name="passwdcnf" required></input>

                    <div className="botoes">
                        <button className="btnCadastrar">Cadastre-se</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}
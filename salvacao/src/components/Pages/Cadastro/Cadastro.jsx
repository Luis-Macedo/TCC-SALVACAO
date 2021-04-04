import React, {Component} from 'react';
import axios from 'axios';
import './style/Cadastro.css';

class Cadastro extends Component{

    state = {
        name: "",
        email: "",
        passwd: ""
    };

    handleNameChange = e =>{
        this.setState({
            name: e.target.value
        });
    };

    handleEmailChange = e =>{
        this.setState({
            email: e.target.value
        });
    };

    handlePasswdChange = e =>{
        this.setState({
            passwd: e.target.value
        });
    };

    handleFormSubmit = e =>{
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            passwd: this.state.passwd
        };
        axios.post("http://localhost:3001/teste/user", data).then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="container">
                <form action="/cadastro" method="post" onSubmit={this.handleFormSubmit}>

                    <div className="inputs2">
                        <div className="name2">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" name="name" id="name" placeholder="Digite seu nome" value={this.state.name} onChange={this.handleNameChange} required/>
                        </div>
                        
                        <div className="email2">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu email" value={this.state.email} onChange={this.handleEmailChange} required/>
                        </div>

                        <div className="passwd2">
                            <label htmlFor="passwd">Senha:</label>
                            <input type="password" name="passwd" id="passwd" placeholder="Digite sua senha" value={this.state.passwd} onChange={this.handlePasswdChange} required/>
                        </div>

                        <div className="passwd2">
                            <label htmlFor="passwd">Confirmar:</label>
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
}

export default Cadastro;
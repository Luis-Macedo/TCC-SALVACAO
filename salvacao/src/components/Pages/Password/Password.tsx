import React, { FormEvent, useState } from 'react';
import api from '../../../services/api';
import { history } from '../../App/history';
import './style/password.css'

export default function Password(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const data = {
            email: email,
            senha: senha
        }
        
        await api.post('/user/redefine', data).then(res => {
            if(res.data.mensagem){
                alert("Senha redefinida");
                history.push("/login");
                sessionStorage.removeItem("id");
                sessionStorage.removeItem("nome");
                window.location.reload();
            }else if (res.data.erro){
                alert("Erro na redefinição de senha")
                history.push("/login");
                window.location.reload();
            }
        });
    }

    return(
        <div className="container">

            <form onSubmit={handleSubmit} className="redefinir teste3">
                
                <div className="inputs1">
                    <div className="input">
                        <label htmlFor="email">Digite seu email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="email"
                            required
                            value={email}
                            placeholder="Digite deu email"
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    
                    <div className="input">
                        <label htmlFor="senha" >Digite uma nova senha</label>
                        <input 
                            type="password" 
                            name="senha" 
                            id="senha"
                            className="senha"
                            required
                            value={senha}
                            placeholder="Digite a sua senha"
                            onChange={event => setSenha(event.target.value)}
                        />
                    </div>
                    
                </div>
                

                <div className="botao">
                    <button className="btnsenha" type="submit">Redefinir senha</button>
                </div>
                
            </form>

        </div>
    )
}
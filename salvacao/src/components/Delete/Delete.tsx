import React, { FormEvent } from 'react';
import { useState } from 'react';
import api from '../../services/api';
import { history } from '../App/history';
import './style/Delete.css';

export default function Delete(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const data = {
            email: email,
            senha: senha
        }

        await api.post('/user/delete', data).then(res => {
            if(res.data.erro){
                alert("Usuário não encontrado");
                history.push("/delete");
                window.location.reload();
            }else if(res.data.sucesso){
                alert("Usuário Deletado!");
                history.push("/");
                window.location.reload();
            }
        })
    }

    return(

        <div className="container">
            <form method="post" onSubmit={handleSubmit} className="form-delete">

                <div className="email-delete">
                    <label htmlFor="email">Digite seu Email:</label>
                    <input 
                        type="email"
                        name="email"
                        id="email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="password-delete">
                    <label htmlFor="senha">Digite sua senha:</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={senha}
                        onChange={event => setSenha(event.target.value)}
                    />
                </div>

                <div className="btn-delete">
                    <button type="submit">Deletar</button>
                </div>
                
            </form>
        </div>
    )
}
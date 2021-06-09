import React, { useEffect, useState } from 'react';
import api from '../../../services/api';
import './style/Profile.css';

interface User{
    nome: string,
    email: string,
    endereco: string,
    cidade: string,
    estado: string,
    telefone: string
}

export default function Profile(){

    const [user, setUser] = useState<User>();
    
    const id = sessionStorage.getItem('id');

    useEffect(() =>{
        api.get(`/user/listone/${id}`).then(response => {
            setUser(response.data)
        });
    });

    if(!user){
        return <p>Carregando...</p>
    }

    return(
        
        <div className="container">

            <div className="content">
                <div className="infos">
                    <div className="infoContent">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" name="nome" id="nome" placeholder={user.nome ? user.nome : 'Nome do usuario'} disabled/>

                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" placeholder={user.email ? user.email : 'Email do usuário'}disabled/>

                        <label htmlFor="endereco">Endereço: </label>
                        <input type="text" name="endereco" id="endereco" placeholder={user.endereco ? user.endereco : 'Endereco do usuário'}disabled/>

                        <label htmlFor="city">Cidade: </label>
                        <input type="text" name="city" id="city" placeholder={user.cidade ? user.cidade : 'Cidade do usuário'} disabled/>

                        <label htmlFor="state">Estado: </label>
                        <input type="text" name="state" id="state" placeholder={user.estado ? user.estado : 'estado do usuario'} disabled/>

                        <label htmlFor="telephone">Telefone: </label>
                        <input type="text" name="telephone" id="telephone" placeholder={user.telefone ? user.telefone : 'telefone do usuario'} disabled/>
                    </div>
                </div>
            </div>
            
        </div>
    )
};
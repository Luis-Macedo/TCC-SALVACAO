import React from 'react';
import './style/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {

    return(
        <div className="container">

            <div className="content">
                <div className="photo">
                    <div className="profilePhoto">
                        <img src="/images/logoCircular.png" alt="" srcset=""/>
                    </div>
                    
                    <div className="botao">
                        <Link to="/editProfile">
                            <button className="btnEdit">Editar perfil</button>
                        </Link>
                    </div>
                    
                    
                </div>

                <div className="infos">
                    <div className="infoContent">
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" name="nome" id="nome" placeholder="Nome" disabled/>

                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" placeholder="EmailTeste@outlook.com" disabled/>

                        <label htmlFor="birth">Nascimento: </label>
                        <input type="text" name="birth" id="birth" placeholder="07/03/2001" disabled/>

                        <label htmlFor="city">Cidade: </label>
                        <input type="text" name="city" id="city" placeholder="São Paulo" disabled/>

                        <label htmlFor="state">Estado: </label>
                        <input type="text" name="state" id="state" placeholder="São Paulo" disabled/>

                        <label htmlFor="telephone">Telefone: </label>
                        <input type="text" name="telephone" id="telephone" placeholder="99716485" disabled/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;
import React from 'react';
import Topo from '../topo/topo';
import Footer from '../footer/footer';
import './perfil.css';


export default (props) => {
    return (
        <div className="container">
            <Topo/>
            <div className="perfil">
                <div className="foto">
                    <img className="logo imgTopo" src="/images/Logo.png" alt=""/>
                </div>

                <div className="dados">
                    <div className="nome">Nome</div>
                    <div className="tipo">Tipo de perfil</div>
                    <div className="local">Localização</div>
                </div>
            </div>
            <Footer/>
        </div>
        
        
    );
}
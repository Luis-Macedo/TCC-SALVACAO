import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/navbar.css';

function Nav () {

    return(
        <div className="containerTopo">
            <div className="navTopo">
                <ul className="ulTopo">
                    <li className="liTopo" href="/signup">
                        <button className="botaoLinks">
                            Cadastre-se
                        </button>
                    </li>
                    <li className="liTopo" href="/login">
                        <Link to="login">
                            <button className="botaoLinks">
                                Login
                            </button>
                        </Link> 
                    </li>
                    <li className="liTopo" hraf="/">
                        
                        <Link to="/"><img className="logo imgTopo" src="/images/Logo.png" alt=""/>
                            <button className="botaoLogo"></button>
                        </Link>
                        
                    </li>
                    <li className="liTopo" href="/map">

                        <button className="botaoLinks">
                            Mapa
                        </button>
                    </li>
                    <li className="liTopo" href="/ongs">
                        <button className="botaoLinks">
                            Ongs
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Nav;
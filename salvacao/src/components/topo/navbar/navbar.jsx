import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Nav () {

    return(
        <div className="containerTopo">
            <div className="navTopo">
                <ul className="ulTopo">
                    <li className="liTopo">
                        <Link to="/perfil">
                            <button className="botaoLinks">
                                Perfil
                            </button>
                        </Link>
                    </li>
                    <li className="liTopo">
                        <Link to="/login">
                            <button className="botaoLinks">
                                Login
                            </button>
                        </Link> 
                    </li>
                    <li className="liTopo">
                        
                        <Link to="/"><img className="logo imgTopo" src="/images/Logo.png" alt=""/>
                            <button className="botaoLogo"></button>
                        </Link>
                        
                    </li>
                    <li className="liTopo">
                        <Link to="/mapa"><img className="liTopo"/>
                            <button className="botaoLinks">
                                Mapa
                            </button>
                        </Link>
                    </li>
                    <li className="liTopo">
                        <Link to="/instituicoes">
                            <button className="botaoLinks">
                                Instituições
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default Nav;
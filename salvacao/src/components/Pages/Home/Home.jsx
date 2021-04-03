import React, { useEffect } from 'react';
import './style/Home.css';
import axios from 'axios';

function Home(){

    useEffect(() =>{
        axios.get("http://localhost:3001/").then(response =>{
            console.log(response.data);
        })
    }, []);

    return(
        <div className="container">
            <div className="card">
                <div className="cardHead">
                    <img src="/images/logosalvacao.png" alt="" srcset=""/>
                </div>

                <div className="cardBody">
                    <div className="home">
                        <h1>Bem-Vindos ao Salvacão!</h1>
                    </div>
                    <div className="description">
                        <p>
                            Nós somos um serviço de geolocalização para animais domésticos perdidos e abandonados.
                            <br/>
                            Se você está procurando por ajuda com seu animal ou até mesmo quer oferecer ajuda, venha conhecer nosso sistema.
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Home;
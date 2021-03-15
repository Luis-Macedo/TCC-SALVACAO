import React from 'react';
import Topo from '../topo/topo';
import Footer from '../footer/footer';
import './mapa.css';


export default (props) => {
    return (
        <html>
            <Topo/>
            <div className="container">
                <div className="mapa">
                    Aqui fica o mapa
                </div>
                
            </div>

            <Footer/>
        </html>
    );
}
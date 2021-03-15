import React from 'react';
import Topo from '../topo/topo';
import Footer from '../footer/footer';
import './instituicoes.css'

export default (props) => {

    return(

        <html>
            <Topo/>

            <div className="container">
                <div className="listar">
                    Aqui ficam as instituições
                </div>
                
            </div>

            <Footer/>
        </html>
    );
}
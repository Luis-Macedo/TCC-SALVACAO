import React, { useState } from 'react';
import './style/Mapa.css';
import ReactMapGL from 'react-map-gl';
import { Link } from 'react-router-dom';
import { history } from '../../App/history'


function Mapa(){

    const[viewPort, setViewPort] = useState({
        latitude: -27.2092052,
        longitude: -49.6401092,
        width: '100vw',
        height: '90vh',
        zoom: 8
    });

    const validarLogin = () =>{
        if(!!localStorage.getItem('app-token')){
            alert("Redirecinando para página")
        }else{
            history.push('/login')
            window.location.reload()
        }
    }

    return(
        <div id="page-map">
            <ReactMapGL 
                {...viewPort}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewPort) => {
                    setViewPort(viewPort);
                }}
            >
                <Link to="/pets">
                    <button className="btn"><img srcSet="/images/logopata.png" alt="" onClick={validarLogin}/></button>
                </Link>
                
            </ReactMapGL>

        </div>
    )
}

export default Mapa;
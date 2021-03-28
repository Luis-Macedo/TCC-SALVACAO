import React, { useState } from 'react';
import './style/Mapa.css';
import ReactMapGL from 'react-map-gl';
import { Link } from 'react-router-dom'


function Mapa(){

    const[viewPort, setViewPort] = useState({
        latitude: -27.2092052,
        longitude: -49.6401092,
        width: '100vw',
        height: '90vh',
        zoom: 10
    });

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
                    <button className="btn"><img src="/images/logopata.png" alt="" srcset=""/></button>
                </Link>
                
                
            </ReactMapGL>

        </div>
    )
}

export default Mapa;
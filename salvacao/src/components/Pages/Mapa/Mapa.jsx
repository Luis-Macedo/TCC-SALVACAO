import React, { useState } from 'react';
import './style/Mapa.css';
import ReactMapGL from 'react-map-gl';


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

            </ReactMapGL>
            
        </div>
    )
}

export default Mapa;
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import './style/Mapa.css';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Link } from 'react-router-dom';
import { history } from '../../App/history'


function Mapa(){

    const[viewPort, setViewPort] = useState({
        latitude: -22.2130026,
        longitude: -49.9585247,
        width: '100vw',
        height: '90vh',
        zoom: 15
    });

    const validarLogin = () =>{
        if(!!sessionStorage.getItem('app-token')){
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

                <Marker
                    latitude={-22.2130026} longitude = {-49.9585247}
                >
                    <FaIcons.FaMapMarker size={45} color={`#f36229`}/>
                </Marker>

                <Link to="/pets">
                    <button className="btn"><img srcSet="/images/logopata.png" alt="" onClick={validarLogin}/></button>
                </Link>
                
            </ReactMapGL>

        </div>
    )
}

export default Mapa;
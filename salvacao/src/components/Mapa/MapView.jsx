import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const MapView = () => {

    const[viewPort, setViewPort] = useState({
        latitude: -27.2092052,
        longitude: -49.6401092,
        width: '100%',
        height: '100%',
        zoom: 10
    });

    return(
        <>
            <ReactMapGL 
            {...viewPort}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewPort) => {
                setViewPort(viewPort);
            }}
            ></ReactMapGL>
        </>
    )
    
}

export default MapView;
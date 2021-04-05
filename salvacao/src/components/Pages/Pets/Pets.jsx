import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './style/Pets.css';
import ReactMapGL from 'react-map-gl';


const Pets = () => {

    const[viewPort, setViewPort] = useState({
        latitude: -27.2092052,
        longitude: -49.6401092,
        width: '100%',
        height: '100%',
        zoom: 10
    });

    return(

        <div className="container">

            <div className="corpo">
                <div className="mapa">
                    <ReactMapGL 
                        {...viewPort}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        onViewportChange={(viewPort) => {
                            setViewPort(viewPort);
                        }}
                    ></ReactMapGL>
                </div>

                <div className="form">
                    <Formik initialValues={{}}>
                        <Form className="formulario">
                            <Field
                                placeholder="Descrição"
                                name="descricao"
                                className="descricao"
                            />
                            <Field
                                type="date"
                                name="data"
                                className="data"
                            />

                            <div className="btn-relatar">
                                <button type="submit">Relatar</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                
            </div>
            
        </div>
    )
}

export default Pets
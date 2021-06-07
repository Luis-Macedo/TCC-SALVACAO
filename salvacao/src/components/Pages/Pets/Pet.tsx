import React, { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import MapGL, {Marker} from 'react-map-gl';
import api from '../../../services/api';
import './style/Pet.css';

interface Animal{
    id: number;
    latitude: number;
    longitude: number;
    titulo: string;
    descricao: string;
    data_relato: String;
    foto: String;
}

interface AnimalParams{
    id: string;
}

export default function Pet(){

    const params = useParams<AnimalParams>();
    const [animal, setAnimal] = useState<Animal>();

    useEffect(() => {
        api.get(`pets/list/one/${params.id}`).then(response => {
          setAnimal(response.data);
          
        });
    }, [params.id]);
    console.log(animal)
    
    if(!animal){
        return <p>Carregando...</p>;
    }
    
    const viewPort = {
        latitude: animal.latitude,
        longitude: animal.longitude,
        width: '100%',
        height: '100%',
        zoom: 15
    };

    const dataAnimal = animal.data_relato.substring(0, 10)

    return(
        <div className="container">
            <div className="conteudo">
                <div className="mapaPet">
                    <MapGL 
                        {...viewPort} 
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    >
                        <Marker
                            key={animal.id}
                            latitude={animal.latitude} 
                            longitude = {animal.longitude} 
                            offsetLeft={-25} 
                            offsetTop={-50}
                        >
                            <FaIcons.FaMapMarker size={45} color={`#f36229`}/>
                        </Marker>
                    </MapGL>
                </div>

                <div className="Infos">

                    <div className="imagemAnimal">
                        <img src={`${animal.foto}`} alt=""/>
                    </div>
                    
                    <h1>Título do Relato: {animal.titulo}</h1>
                    
                    <h3>Descrição do caso:</h3>
                    <h4>{animal.descricao}</h4>
                    
                    <h3>Relatado em: {dataAnimal}</h3>
                </div>
            </div>
            
        </div>
    )
}
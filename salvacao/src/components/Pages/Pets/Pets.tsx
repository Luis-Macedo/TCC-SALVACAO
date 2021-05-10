/* eslint-disable no-restricted-globals */
import React, { FormEvent, useState, ChangeEvent } from 'react';
import './style/Pets.css';
import * as FaIcons from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";
import MapGL, {Marker, MapEvent} from 'react-map-gl';
import api from '../../../services/api';


const Pets = () => {

    const [position, setPosition] = useState({latitude: 0, longitude: 0});
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const [descricao, setDescricao] = useState('');

    const[viewPort, setViewPort] = useState({
        latitude: -22.2092052,
        longitude: -49.6401092,
        width: '100%',
        height: '100%',
        zoom: 5
    });

    function handleMapClick(event: MapEvent){
        const [lng, lat] = event.lngLat;
        setPosition(
            {
                latitude: lat,
                longitude: lng
            }
        );

        return [lng, lat]
    }

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>){

        if (!event.target.files){
          return;
        }
    
        const selectedImages = Array.from(event.target.files);
    
        setImages(selectedImages);
    
        const selectedImagesPreview = selectedImages.map(image => {
          return URL.createObjectURL(image);
        });
    
        setPreviewImages(selectedImagesPreview);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const dados = {
            latitude: position.latitude, 
            longitude: position.longitude, 
            descricao: descricao
        }
        await api.post('/pets', dados).then(res => {
            const { data } = res
            console.log(data)
            if(data){
                alert(`Animal cadastrado ${data}`)
            }
        })
        .catch(err => alert(`Login não pôde ser efetuado: ${err}`));
    
    }

    return(

        <div className="containerpets">

            <div className="corpo">
                

                <div className="form">
                
                    <form onSubmit={handleSubmit} className="formulario">

                        <div className="mapa">
                            <MapGL 
                                {...viewPort}
                                
                                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                                onViewportChange={(viewPort) => {
                                    setViewPort(viewPort);
                                }}
                                onClick={handleMapClick}
                            >
                                
                                {
                                    position.latitude !== 0
                                    && (<Marker latitude={position.latitude} longitude={position.longitude} offsetLeft={-25} offsetTop={-50}>
                                            <FaIcons.FaMapMarker size={45} color={`#f36229`}/>
                                        </Marker> 
                                    )
                                }

                            </MapGL>
                        </div>

                        <div className="esquerda">
                            <label htmlFor="descricao">Descrição do caso</label>
                            <textarea
                                placeholder="Descrição"
                                name="descricao"
                                className="descricao"
                                id="descricao"
                                value={descricao}
                                onChange={event => setDescricao(event.target.value)}
                            />
                            <input
                                type="date"
                                name="data"
                                className="data"
                                datatype="aaaa/mm/dd"
                            />
                        </div>
                        
                        <div className="direita">

                            <label htmlFor="foto">Selecione uma foto</label>
                            <div className="input-block">

                            <div className="images-container">

                                {previewImages.map(image => {
                                return(
                                    <img key={image} src={image} alt={`${name}`}/>
                                )
                                })}
                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={50} color="#15b6d6" />
                                </label>

                                
                            </div>

                            <input multiple onChange={handleSelectImages} type="file" id='image[]'/>
                            

                        </div>

                            <div className="btn-relatar">
                                <button type="submit">Relatar</button>
                            </div>
                        </div>

                        
                    </form>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Pets
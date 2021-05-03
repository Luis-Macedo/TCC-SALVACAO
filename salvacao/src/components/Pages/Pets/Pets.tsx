/* eslint-disable no-restricted-globals */
import React, { FormEvent, useState, ChangeEvent } from 'react';
import './style/Pets.css';
import { FiPlus } from "react-icons/fi";
import {InteractiveMap} from 'react-map-gl';


const Pets = () => {

    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const handleFormSubmit = values =>{
    };

    const[viewPort, setViewPort] = useState({
        latitude: -27.2092052,
        longitude: -49.6401092,
        width: '100%',
        height: '100%',
        zoom: 10
    });

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

    return(

        <div className="containerpets">

            <div className="corpo">
                <div className="mapa">
                    <InteractiveMap 
                        {...viewPort}
                        
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        onViewportChange={(viewPort) => {
                            setViewPort(viewPort);
                        }}
                    ></InteractiveMap>
                </div>

                <div className="form">
                
                    <form className="formulario">

                        <div className="esquerda">
                            <label htmlFor="descricao">Descrição do caso</label>
                            <textarea
                                placeholder="Descrição"
                                name="descricao"
                                className="descricao"
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
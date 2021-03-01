import Head from 'next/head';
import React from 'react';
import App from '../Components/App';
import { Footer } from '../Components/Footer';
import { Topo } from '../Components/Topo';

import estilo from '../styles/index.module.css';
import head from 'next/head';

export default function Home() {
  return (

    

    <div className={estilo.containerIndex}>

      <head>
        <title>Salvacao</title>
      </head>

      <Topo/>
      <App/>
      <Footer/>
    </div>
  )
}

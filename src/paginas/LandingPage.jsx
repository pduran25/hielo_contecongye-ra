import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/fondo-hielo.png';
import logoImage from '../assets/logo-hielo-dos.png';




const LandingPage = () => {


  var source = "";
  var source2 = "";

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const codigo = params.get('animacion');
 



  source = "./assets/cub12.glb";
  source2 = "./assets/cub12.usdz";

  if(codigo == 1){
    source = "./assets/cub12.glb";
    source2 = "./assets/cub12.usdz";
  }else if(codigo == 2){
    source = "./assets/cub13.glb";
    source2 = "./assets/cub13.usdz";
  }

/*ok*/
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    const audioElement = document.getElementById('myAudio');
  
    if (isAudioPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  
    setIsAudioPlaying(!isAudioPlaying);
  };





  return (
    
      <>
        <div style={{
          background: `url(${backgroundImage}) repeat fixed center center / cover`,
          height: '100%',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
      <div style={{ marginBottom: '0px' }}>
        <div style={{ marginBottom: '-100px' }}>
      <img
        src={logoImage}
        alt="Logo"
        style={{ width: '100vw' }}
      />
      </div>
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '3em', WebkitTextStroke: '2px darkgray'  }}>BIENVENIDOS</h1>
        <p style={{ textAlign: 'center', color: 'white', fontSize: '1.8em', fontWeight: 'bold', WebkitTextStroke: '0.5px darkgray' }}>EXPERIMENTA LA SENSACIÓN DEL FRIO CON ESTE CUBO DE HIELO GIGANTE! DESCUBRE COMO LA REALIDAD AUMENTADA PUEDE TRANSFORMAR TU ALREDEDOR!</p>
        <div className="App" style={{ width: '100%', height: '100%', marginTop: '50px' }}>
        <model-viewer
          src={source}
          ios-src={source2}
          camera-controls
          camera-orbit="-40deg 70deg 200m"
          camera-target="0 0 0"
          ar
          ar-modes="scene-viewer webxr quick-look"
          xr-environment
          interactive
          environment-image="./assets/enviroment.jpg" 
          ar-placement="wall"
          autoplay
        >


          <Boton slot="ar-button" style={{
            backgroundColor: 'blue', 
            color: 'white'
        }}>
            Ingresa
          </Boton>
        </model-viewer>
      </div>
      </div></div>
      </>
    
    
  );
};

export default LandingPage;

const SoundButton = styled.img`
display: inline-block;
`;

const Boton = styled.button`

display: inline-block;
border: none;
border-radius: 4px;
background-color: #006a22;
color: #fff;
width: 70%;
margin: 15%;
margin-top: 0;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;
alignItems: 'center',

&:hover {
  background-color: #006a22;
}

&:focus {
  outline: none;
  background-color: #006a22;
}
`;
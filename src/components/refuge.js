
import React, { useState, useEffect } from 'react';


export const Refuge = () => {
  const [imageSrc, setImageSrc] = useState('');


  useEffect(() => {
    async function getImage() { 
      try {
        const response = await fetch('http://raspberrypi44.duckdns.org:9005/refuge'); 
        /*const response = await fetch('http://localhost:9005/refuge'); */
        const imageBlob = await response.blob();
        const objectURL = URL.createObjectURL(imageBlob);
        setImageSrc(objectURL);
      } catch (error) {
        console.error(error);
      }
    }
    getImage();
  }, []);

  return (

    <jumbotron fluid style={{height: "100vh"}}>
    <div style={{height: "100%"}}>
      <img src={imageSrc} alt="" style={{height: "100%", width: "100%", objectFit: "cover"}} />
    </div>
    </jumbotron>  
  );
}


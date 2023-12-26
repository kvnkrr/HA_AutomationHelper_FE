import React, { useState, useEffect } from 'react';


export const Home = () => {
  const [imageSrc, setImageSrc] = useState('');

/* set to loal host */ 
  useEffect(() => {
    async function getImage() {
      try {
        const response = await fetch('http://localhost:9005/');
        const response = await fetch('http://raspberrypi44.duckdns.org:3000/');
        const imageBlob = await response.blob();
        const objectURL = URL.createObjectURL(imageBlob);
        console.log('here');
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
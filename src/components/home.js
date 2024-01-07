import React, { useState, useEffect } from 'react';


export const Home = () => {
  const [imageSrc, setImageSrc] = useState('');

/* set to loal host or to prodcution server */ 

  useEffect(() => {
    async function getImage() {
      try {
        /* For Production 
        const response = await fetch('http://localhost:9005/');*/
        console.log("Front end calling production server ");
        const response = await fetch('http://raspberrypi44.duckdns.org:3000/');
        const imageBlob = await response.blob();
        const objectURL = URL.createObjectURL(imageBlob);
        console.log('here');
        setImageSrc(objectURL);
      } catch (error) {
        console.error(error);
      }

      /* set to loal host or to prodcution server */ 

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
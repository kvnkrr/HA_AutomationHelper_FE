
import React, { useState, useEffect } from 'react';
//import Jumbotron from 'react-bootstrap/';


export const Refuge = () => {
  const [imageSrc, setImageSrc] = useState('');


  useEffect(() => {
    async function getImage() {
      try {
        const response = await fetch('http://localhost:2090/refuge');
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


    // <jumbotron fluid>
    //   <img src={imageSrc} alt="" />
    // </jumbotron>
   
    // <jumbotron fluid>
   
    //    <h1 className="display-4">Fluid jumbotron</h1>
    //          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    //   {imageSrc && (
    //     //<img src={imageUrl} alt="Server Image" className="img-fluid" />
    //     <img src={imageSrc} alt="" className="img-fluid" />
    //   )}
    // </jumbotron>
  );
}



// export const Refuge = () => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//         async function fetchImage() {
//           const response = await fetch('http://localhost:2090/refuge'); 
//           const data = await response.json();
//           setImageUrl(data.imageUrl);
//         }, []);
//   return (
//       <div className="jumbotron jumbotron-fluid">
//        <div className="container">
//             <h1 className="display-4">Fluid jumbotron</h1>
//             <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//         </div>
//       </div>
//    );
// }  



// 
// import { Jumbotron } from 'react-bootstrap/lib/Jumbotron';
// export const Refuge = () => {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     async function fetchImage() {
//       const response = await fetch('http://localhost:2090/refuge'); 
//       const data = await response.json();
//       setImageUrl(data.imageUrl);
//     }
//   }, []);
//   return (
//     <Jumbotron>
//       {imageUrl && (
//         <img src={imageUrl} alt="Server Image" className="img-fluid" />
//       )}
//     </Jumbotron>
//   ); 
// }





// import React, { useState } from "react";

// export const  Refuge = () =>{
//   const [image, setImage] = useState(null);
//   const [showImage, setShowImage] = useState(false);

//   const handleClick = async () => {
//     try {
//       const response = await fetch("http://localhost:2090/refuge");
//       const blob = await response.blob();
//       setImage(URL.createObjectURL(blob));
//       setShowImage(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//     console.log("called");
//     handleClick()
//     {showImage && <img src={image} alt="schedule" />}
//     </div>
//   );
// }

// export default Refuge;

// import React, { useState } from "react";

// function Refuge() {
//   const [image, setImage] = useState(null);
//   const [showImage, setShowImage] = useState(false);
//   const response = async fetch("http://localhost:2090/refuge");  
//   const blob = async response.blob();
//   setImage(URL.createObjectURL(blob));
//   setShowImage(true);
//   console.log("called");
 
//   return (
//     <div>
//       {showImage && <img src={image} alt="schedule" />}
//     </div> 
//   );
// }
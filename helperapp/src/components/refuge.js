import React, { useState } from "react";

export const  Refuge = () =>{
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:2090/refuge");
      const blob = await response.blob();
      setImage(URL.createObjectURL(blob));
      setShowImage(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    console.log("called");
    handleClick()
    {showImage && <img src={image} alt="schedule" />}
    </div>
  );
}

export default Refuge;

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

// export default Refuge;

// export const Refuge = () => {
//     return (
//         <div className="jumbotron jumbotron-fluid">
//          <div className="container">
//               <h1 className="display-4">Fluid jumbotron</h1>
//               <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//           </div>
//         </div>


//     );
// }
// import React, { useState } from 'react';
// const getRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };


// const getRandomGradient = () => {
//   const color1 = getRandomColor();
//   const color2 = getRandomColor();
//   return `linear-gradient(to right, ${color1}, ${color2})`;
// };

// const GradientApp: React.FC = () => {

//   const [currentGradient, setCurrentGradient] = useState<string>(getRandomGradient());
  
//   const [savedGradients, setSavedGradients] = useState<string[]>([]);


//   const handleNextGradient = () => {
//     setCurrentGradient(getRandomGradient());
//   };

//   const handleSaveGradient = () => {
//     setSavedGradients([...savedGradients, currentGradient]);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Random Linear Gradient Generator</h1>

//       <div
//         style={{
//           width: '100%',
//           height: '200px',
//           background: currentGradient,
//           marginBottom: '20px',
//           borderRadius: '10px',
//         }}
//       />

     
//       <button onClick={handleNextGradient} style={{ marginRight: '10px' }}>
//         Next Gradient
//       </button>
//       <button onClick={handleSaveGradient}>Save Gradient</button>

//       <h2>Saved Gradients:</h2>
//       <div>
//         {savedGradients.length === 0 ? (
//           <p>No gradients saved yet.</p>
//         ) : (
//           savedGradients.map((gradient, index) => (
//             <div
//               key={index}
//               style={{
//                 width: '100%',
//                 height: '100px',
//                 background: gradient,
//                 marginBottom: '10px',
//                 borderRadius: '5px',
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default GradientApp;

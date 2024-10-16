// import React, { useState } from 'react';

// const Counter: React.FC = () => {
//   const imageSrc = "https://cdn.pixabay.com/photo/2022/05/17/02/43/pins-7201500_640.jpg";

//   const [count, setCount] = useState<number>(1);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decriment = () => {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <p>Number of images: {count}</p>
//       <button onClick={increment}>+</button>
//       <button onClick={decriment}>-</button>

//       <div>
//         {[...Array(count)].map((_, i) => (
//           <img key={i} src={imageSrc} alt="Incremented, decriment"  style={{ margin: '10px', width: '500px' }} />
//         ))}

//       </div>
//     </div>
//   );
// };

// export default Counter;

import React, { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomGradient = () => {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  return {
    gradient: `linear-gradient(${randomColor1}, ${randomColor2})`,
    colors: [randomColor1, randomColor2],
  };
};

const GradientApp: React.FC = () => {
  const [currentGradient, setCurrentGradient] = useState<{
    gradient: string;
    colors: string[];
  }>(getRandomGradient());

  const [savedGradients, setSavedGradients] = useState<
    { gradient: string; colors: string[] }[]
  >([]);

  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);

  const handleNextGradient = () => {
    setCurrentGradient(getRandomGradient());
  };

  const handleSaveGradient = () => {
    setSavedGradients([...savedGradients, currentGradient]);
  };

  const handleDelete = () => {
    window.location.reload();
  };

  return (
    <div className="return_div" style={{ padding: "20px" }}>
      <div
        className="bacground_gradient-div"
        style={{
          background: currentGradient.gradient,
        }}
      />

      <p>
        Current Colors: <strong>{currentGradient.colors[0]}</strong> to{" "}
        <strong>{currentGradient.colors[1]}</strong>
      </p>

      <button
        className="next_gradient"
        onClick={handleNextGradient}
        style={{ marginRight: "10px" }}
      >
        Next
      </button>
      <button
        className="save-garadient"
        onClick={handleSaveGradient}
        style={{ marginRight: "10px" }}
      >
        Save
      </button>

      <button className="delete-gradient" onClick={handleDelete}>
        Delete
      </button>
      <div className="div_flex">
        {savedGradients.length === 0 ? (
          <p></p>
        ) : (
          savedGradients.map((gradient, index) => (
            <div key={index}>
              <div
                className="div_gradient"
                style={{
                  background: gradient.gradient,
                }}
              />
              <p>
                Colors: <strong>{gradient.colors[0]}</strong> to{" "}
                <strong>{gradient.colors[1]}</strong>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GradientApp;

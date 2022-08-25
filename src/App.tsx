import React, { useState } from 'react';
import './App.css';
// import domtoimage from 'dom-to-image';

export default function App() {
  React.useEffect(() => {
    var canvas = document.getElementById("myCanvas");
    const w = 200;
    const h = 100;
    let context = canvas.getContext("2d");

    for(let i=0;i<w;i++) {
        for(let j=0;j<h;j++) {
            
          let num1 = Math.floor(Math.random()*255)
          let num2 = Math.floor(Math.random()*255)
          let num3 = Math.floor(Math.random()*255)
          context.fillStyle = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
          context.fillRect(i, j, 1, 1);
        }
    }
  }, []);

  return (
    <div>
      <h1>HTML5 Canvas + React.js</h1>
      <canvas
        id="myCanvas"
        width="200"
        height="100"
        style={{ border: "1px solid #d3d3d3" }}
      >
        Your browser does not support the HTML canvas tag.
      </canvas>
    </div>
  );
}

// function App() {
//   let canvas = document.getElementById("acanvas");
//   const [error, setError] = useState<string>('');
//   let w = canvas.width = 200;
//   let h = canvas.height = 200;

//   let context = canvas.getContext("2d");

//   for(let i=0;i<w;i++) {
//       for(let j=0;j<h;j++) {
          
//         let num = Math.floor(Math.random()*255)
//           context.fillStyle = "rgb(" + num + "," + num + "," + num + ")";
//           context.fillRect(i, j, 1, 1);
//       }
//   }


//   return (
//     <div className="App">
//       <div id="adiv" style={{background:"url("+canvas.toDataURL()+")"}}></div>
//       <canvas id="acanvas"></canvas>
//     </div>
//   );
// }

// export default App;

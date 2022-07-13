import { useState } from "react";
import Images from "./Images";
import "./styles.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="" alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index)=>(
          <img key={index} src={img} alt="vista" />
        )
        )}
      </div>
    </div>
  );
}

export default App;

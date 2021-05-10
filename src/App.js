import React from "react";
import './App.css';
import LandContainer from "./components/LandContainer/landContainer";
import Carousel from "./components/Carousel/carousel";

function App() {
    React.useEffect(()=>{
        document.title = "Travelling land page";
    });
  return (
    <div className="App font-body grid pb-12" >
      <LandContainer/>
      <Carousel/>
        <div>
            hello world
        </div>
    </div>
  );
}

export default App;

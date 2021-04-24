import React from "react";
import './App.css';
import LandContainer from "./components/LandContainer/landContainer";

function App() {
    React.useEffect(()=>{
        document.title = "Travelling land page";
    });
  return (
    <div className="App font-body grid " >
      <LandContainer/>
    </div>
  );
}

export default App;

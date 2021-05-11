import React from "react";
import './App.css';
import LandContainer from "./components/LandContainer/landContainer";
import Carousel from "./components/Carousel/carousel";
import About from "./components/AboutUs/about";
import Experience from "./components/Experience/experience";

function App() {
    React.useEffect(() => {
        document.title = "Travelling land page";
    });
    return (
        <div className="App font-body grid pb-12">
            <LandContainer/>
            <About/>
            <Carousel/>
            <Experience/>

        </div>
    );
}

export default App;

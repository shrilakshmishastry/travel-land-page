import React from 'react';
import './../../App.css'
import CarouselDesktop from "./carouselDesktop";
import CarouselMobile from "./carouselMobile";


const Carousel = () => {


    return (
        <section className="md:pb-24 pt-6" aria-roledescription="slide" aria-labelledby={"carousel"}>
            <h1 className="hidden" id={"carousel"}>
                carousel of beautifual places
            </h1>
          <div className="hidden md:flex md:flex-col" role="region" >
              <CarouselDesktop/>
          </div>
            <div  className="pb-24 pt-6 md:hidden ">
                <CarouselMobile/>
            </div>
        </section>

    );
}
export default Carousel;

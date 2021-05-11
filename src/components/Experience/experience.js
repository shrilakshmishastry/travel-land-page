import React from 'react';
import img from './../../images/experience.jpg';

const Experience = () => {
    return (
        <section aria-labelledby={"experience"}>
            <h1 id="experience" className="hidden">
                Description about our tourism experience
            </h1>
            <div className="bg-primaryLightTwo px-4 py-12 grid md:grid-rows-1 md:grid-cols-2">
                <div className=" flex flex-col  mx-5 md:mx-12 ">
                    <p className="text-left text-primary font-bold md:mt-8">OUR EXPERIENCE</p>
                    <h2 className="text-left text-4xl mt-4">
                        With Our Experience We Will Serve You
                    </h2>
                    <p className="text-left mt-4 text-gray-600">
                        With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to
                        cater to our customer’s queries and concerns.
                    </p>
                    <div className="self-start">
                        <button className=" mt-6 bg-primary px-2 py-2 md:px-6 md:py-4 text-white"
                                aria-label="This navigates to know more about comapny's Experience .">
                            Learn More
                        </button>
                    </div>
                    <div tabIndex={0} className="space-x-4 md:space-x-16 mt-12 md:self-start ">
                        <div  className="inline-block" >
                            <p className="text-3xl mb-3">20</p>
                            <p className="text-gray-600">Years</p>
                            <p className="text-gray-600">Experience</p>
                        </div>
                        <div  className="inline-block" >
                            <p className="text-3xl mb-3">65</p>
                            <p className="text-gray-600">Destination</p>
                            <p className="text-gray-600">Collabration</p>
                        </div>
                        <div className="inline-block" >
                            <p className="text-3xl mb-3">500+</p>
                            <p className="text-gray-600" >Tourist</p>
                            <p className="text-gray-600">Destination</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6" role="figure" aria-labelledby="caption">
                    <img src={img} alt="image of travelling in bus experience"/>
                    <p className="hidden" id="caption">
                        image of travelling in bus experience
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Experience;

import React from 'react';
import './../../App.css';

const About = () => {

    return (
        <section aria-labelledby={"about"}>
            <h1 className="hidden" id="about">
                Description about us
            </h1>
            <div className="grid px-5 py-6 md:px-12 md:grid-rows-1 md:grid-cols-2 md:gap-6">

                <div className="mt-6 flex flex-col self-center  justify-center">
                    <p className="lg:ml-28 self-start md:mb-4 text-primary font-bold">
                        ABOUT US
                    </p>
                    <div className="lg:ml-28">
                        <h2 className=" text-2xl md:text-4xl  text-left ">
                            Explore All Corners of The World With Us
                        </h2>
                    </div>
                </div>
                <div className=" flex flex-col  bg-primaryLightTwo mt-12 md:mt-14 py-4 px-4 md:px-16 md:py-12  ">
                    <p className=" text-left text-gray-600">
                        With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to
                        cater to our customer’s queries and concerns.
                    </p>
                    <div className="self-start">
                        <button className=" mt-6 bg-primary px-2 py-2 md:px-6 md:py-4 text-white"
                                aria-labelledby={"buttonDescription"}>
                            Learn More
                        </button>
                        <p className="hidden" id="buttonDescription">
                            This navigates to know more about comapny.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default About;

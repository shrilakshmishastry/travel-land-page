import React from "react";
import RadioGroup from "./radioGroup";
import './../../App.css';

const HeadingWithNav = ({firstBtn, SecondBtn, selectedIndex, content}) => {
    return (
        <header className="grid my-2  grid-rows-1 grid-cols-12 md:grid-rows-1 md:grid-cols-6">

            <div
                className="md:grid md:grid-rows-1 md:grid-cols-4 col-span-8  mx-5 md:mx-10 md:col-span-5 text-left flex flex-col">
                <div className=" md:col-span-4 lg:col-span-2 ">
                    <h1 className="text-3xl mt-20 md:mt-24  md:text-5xl md:leading-snug">
                        {content}
                    </h1>
                    <div className="flex flex-row mt-6 ">
                        <button id="playButton" aria-label="Watch video">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 22 22"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button>
                        <label htmlFor="playButton" className="mx-5  my-6">Watch Video</label>
                    </div>
                </div>

                <div className="col-span-2">

                </div>
            </div>

            <div className=" flex flex-row justify-around md:flex-col  col-span-12 md:col-span-1 ">
                <RadioGroup handleFirstBtnClick={firstBtn} handleSecondBtnClick={SecondBtn}
                            selectedIndex={selectedIndex}/>
            </div>
        </header>
    );
}
export default HeadingWithNav;

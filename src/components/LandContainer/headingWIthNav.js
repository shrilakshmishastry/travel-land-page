import React from "react";
import RadioGroup from "./radioGroup";
import './../../App.css';

const HeadingWithNav = ({firstBtn, SecondBtn, selectedIndex ,content}) => {
    return (
        <div className="grid my-2  grid-rows-2 grid-cols-12 md:grid-rows-1 md:grid-cols-6">

            <div className="col-span-8  mx-5 md:mx-10 md:col-span-2 text-left flex">
                <h1 className="text-3xl md:my-24  md:text-5xl md:leading-snug">
                    {content}
                </h1>
            </div>
            <div className="md:col-span-3 ">
            </div>
            <div className="flex flex-row justify-around md:flex-col  col-span-12 md:col-span-1 ">
                <RadioGroup handleFirstBtnClick={firstBtn} handleSecondBtnClick={SecondBtn}
                            selectedIndex={selectedIndex}/>
            </div>
        </div>
    );
}
export default HeadingWithNav;

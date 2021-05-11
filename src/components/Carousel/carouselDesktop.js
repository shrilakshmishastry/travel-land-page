import React from 'react';
import img1 from "../../images/carousel3.jpg";
import img2 from "../../images/carousel2.jpg";
import './../../App.css';


const CarouselDesktop = () => {
    const [count, addCount] = React.useState(3);
    const [disableBtn1, makeBtn1Disable] = React.useState(true);
    const [disableBtn2, makeBtn2Disable] = React.useState(false);
    const [start, changeStart] = React.useState(0);
    let a = [
        "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean",
        "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean",
        "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean",
        "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean",
        "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean",
        "The Faroe Islands is a self-governing archipelago, part of the Kingdom of Denmark. It comprises 18 rocky, volcanic islands between Iceland and Norway in the North Atlantic Ocean",
    ];
    let headings = [
        "Faroe Islands",
        "Faroe Islands",
        "Faroe Islands",
        "Faroe Islands",
        "Faroe Islands",
        "Faroe Islands",
    ];

    const funHanldeMoveAhead = () => {
        if (start >= 0 && count <= a.length) {
            changeStart(start - 1);
            addCount(count - 1);
            makeBtn1Disable(false);
            console.log(start);
            if (start === 1) {
                makeBtn1Disable(true);
            }
        } else if (start === 0) {
            changeStart(0);
            addCount(3);
            makeBtn1Disable(true);

        }
    }

    const funHandleMoveBack = () => {
        if (count >= 0 && count <= a.length - 1) {

            changeStart(start + 1);
            addCount(count + 1);
            makeBtn2Disable(false);
            if (count === a.length - 1) {
                makeBtn2Disable(true);
            }
        } else if (start >= 0 && count === a.length) {
            changeStart(start);
            addCount(a.length);
            makeBtn2Disable(true);
        }
    }

    const handleBtn1Press = () => {
        makeBtn2Disable(false);
        funHanldeMoveAhead();
    }

    const handleBtn2Press = () => {
        makeBtn1Disable(false);
        funHandleMoveBack();
    }

    // const handleBtnDown = (key, index) => {
    //     console.log(key.keyCode);
    //   if(key.keyCode === 37  && index >= count &&  ){
    //
    //     funHandleMoveBack();
    //   }
    //   else if(key.keyCode === 39  && index>= start ){
    //       funHanldeMoveAhead();
    //   }
    //
    // }

    return (
        <>
            <div className="grid md:grid-rows-1 pb-12 md:grid-cols-2 ml-16 mr-12 my-4">
                <div className="mt-6 flex flex-col   justify-center">
                    <p className=" self-start md:mb-4 text-primary font-bold">
                        WHAT WE SERVE
                    </p>
                    <div className="">
                        <h2 className=" text-2xl md:text-4xl  text-left ">
                            We Provide Top Destination Especially For You
                        </h2>
                    </div>
                </div>
                <div className="md:flex md:justify-end" >
                    <button aria-label="navigate to previous set of slides" disabled={disableBtn1}
                            onClick={() => handleBtn1Press()}
                            className={disableBtn1 ? "mx-12 " : " mx-12"}>
                        <svg className="w-12 h-12" fill="none" stroke={disableBtn1 ? "#b6bac2" : "#FF7424"}
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                        </svg>
                    </button>
                    <button aria-label="navigate to next set of  slides" onClick={() => handleBtn2Press()}
                            disabled={disableBtn2}>
                        <svg className="w-12 h-12" fill="none" stroke={disableBtn2 ? "#b6bac2" : "#FF7424"}
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <ul className=" pb-10 grid grid-row-1 grid-cols-12 ">
                {
                    a.map((val, index) => {
                        if (index < count && index >= start) {
                            return <li className="col-span-4 mx-5 my-5  md:my-0 " key={index.toString()}>
                                <img aria-labelledby={"content" + index} tabIndex={0}
                                     alt="image of beautiful place" src={index % 2 === 0 ? img1 : img2}
                                     className="  md:h-80  image "/>
                                <div id={"content" + index} className="hidden shadow-lg flex-col py-6 px-6">
                                    <h4 className="font-bold text-xl text-left ">
                                        {headings[index]}
                                    </h4>
                                    <p className="text-left mt-4">
                                        {val}
                                    </p>
                                </div>
                            </li>;
                        }
                    })
                }
            </ul>

        </>
    );
}
export default CarouselDesktop;

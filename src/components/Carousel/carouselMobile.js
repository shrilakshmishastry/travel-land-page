import React from 'react';
import img1 from "../../images/carousel1.jpg";
import img2 from "../../images/carousel2.jpg";
import './../../App.css';
const CarouselMobile = () => {
    const [count, addCount] = React.useState(2);
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


    const handleBtn1Press = () => {
        makeBtn2Disable(false);
        console.log(count, start);
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
        console.log(count);
    }

    const handleBtn2Press = () => {
        makeBtn1Disable(false);
        console.log(start, count);
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
        console.log(count);
    }
    return (
        <>
            <div className="flex md:flex-row md:justify-end mx-14 my-4">
                <button aria-label="navigate to previous slide" disabled={disableBtn1} onClick={() => handleBtn1Press()}
                        className={disableBtn1 ? "mx-12  text-secondary" : "primary mx-12"}>
                    &#60; &nbsp; Back
                </button>
                <button aria-label="navigate to next slide" onClick={() => handleBtn2Press()} disabled={disableBtn2}
                        className={disableBtn2 ? "text-secondary" : "primary"}>
                    Next &nbsp; &#62;
                </button>
            </div>
            <ul className="grid grid-rows-1  grid-cols-12">
                {
                    a.map((val, index) => {
                        if (index < count && index >= start) {
                            return <li className="col-span-6 mx-5 my-5  " key={index.toString()}>
                                <img tabIndex={0} aria-labelledby={"carouselContent"} alt="image of beautiful place" src={index % 2 === 0 ? img1 : img2}
                                     className="h-48  image "/>
                                <div id={"carouselContent"}  className="hidden shadow-lg flex-col  py-4 px-2">
                                    <h4 className="text-base font-bold  text-left ">
                                        {headings[index]}
                                    </h4>
                                    <p className="text-sm text-left mt-4">
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
export default CarouselMobile;

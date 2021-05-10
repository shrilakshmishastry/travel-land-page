import React from "react";
import NavBar from "./navBar";
import HeadingWithNav from "./headingWIthNav";
import '../../App.css';

const LandContainer = () => {

    const [selected, chooseSelectedOne] = React.useState("btn1");
    let i;
    const[content,setContent] = React.useState("Book With Us And Book It Out of Here !");

    const setBtn1 = () => {
        chooseSelectedOne("btn1");
        setContent("Book With Us And Book It Out of Here !");
        let radioButton = document.getElementById("btn1");
        radioButton.focus();
        radioButton.setAttribute("tabIndex", "0");
        radioButton.setAttribute("aria-checked", "true");
        let radioButton2 = document.getElementById("btn2");
        radioButton2.setAttribute("tabIndex", "-1");
        radioButton2.setAttribute("aria-checked", "false");

    }

    const setBtn2 = () => {
        chooseSelectedOne("btn2");
        setContent("Book With Us And Book It Out Here!");
        let radioButton = document.getElementById("btn2");
        radioButton.setAttribute("tabIndex", "0");
        radioButton.focus();
        radioButton.setAttribute("aria-checked", "true");
        let radioButton2 = document.getElementById("btn1");
        radioButton2.setAttribute("tabIndex", "0");
        radioButton2.setAttribute("aria-checked", "false");
    }

    React.useEffect(() => {

        handleCarousel();
    },);
    const handleCarousel = () => {

       i= setTimeout(() => {
            // handleCarousel();
            if (selected === "btn2") {
                setBtn1();

            } else {
                setBtn2();

            }
        }, [50000]);
    }

    const handleFirstBtnClick = () => {
        setBtn1();
        clearInterval(i);
    }
    const handleSecondBtnClick = () => {
        setBtn2();
        clearInterval(i);
    }

    return (
        <div className="bg-primaryLight landHeight" title="Man feeling amazed!" aria-label="Image of man feeling amazed!">
            <NavBar/>
            <HeadingWithNav content={content} selectedIndex={selected} firstBtn={handleFirstBtnClick}
                            SecondBtn={handleSecondBtnClick}/>
        </div>
    );
}
export default LandContainer;

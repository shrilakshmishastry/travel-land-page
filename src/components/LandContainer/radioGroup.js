import React from "react";
import ButtonRadio from "./buttonRadio";

// buttons code
// const VK_LEFT = 37;
// const VK_UP = 38;
// const VK_RIGHT = 39;
// const VK_DOWN = 40;

const RadioGroup = ({selectedIndex, handleFirstBtnClick, handleSecondBtnClick}) => {
    React.useEffect(() => {
        let radio = document.getElementById("radio-group");
        radio.setAttribute("role", "radiogroup");
    },);
    const handleBtnClick = (id) => {
        // console.log(id);
        if (id === "btn1") {
            handleFirstBtnClick();
        } else {
            handleSecondBtnClick();
        }
    }

    const handleKeyDown = (key, id) => {
        if (key.keyCode !== 9) {
            if ((id === 'btn1' && key.keyCode !== 13) || (id === 'btn2' && key.keyCode === 13)) {
                handleSecondBtnClick();
            } else if ((id === 'btn1' && key.keyCode === 13) || (id === 'btn2' && key.keyCode !== 13)) {
                handleFirstBtnClick();
            }
        }

    }

    return (
        <div id="radio-group" className=" flex flex-row  md:flex-col  place-self-center ">
            <ButtonRadio selected={selectedIndex} id="btn1" handleClick={(id) => handleBtnClick(id)}
                         handleKeyDown={(key, id) => handleKeyDown(key, id)}/>
            <ButtonRadio selected={selectedIndex} id="btn2" handleClick={(id) => handleBtnClick(id)}
                         handleKeyDown={(key, id) => handleKeyDown(key, id)}/>
        </div>
    );
}
export default RadioGroup;

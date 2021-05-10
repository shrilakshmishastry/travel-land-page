import React from "react";

const ButtonRadio = ({
id,
selected,
handleClick,
handleKeyDown,
 }) => {
return (
        <div id={id}  aria-label={"carousel-controller"+id} role={"radio"} aria-checked={selected === id} tabIndex={selected === id ? 0 : -1}
             className={selected === id ? "radio my-4 mx-4 md:mx-0" : 'mx-4 md:mx-1 radioInactive my-6 md:my-8'}
             onClick={() => handleClick(id)} onKeyPress={() => handleClick(id)} onKeyDown={(key) =>handleKeyDown(key,id)}>
            <div className={selected === id ? "radioInner" : ""}>

            </div>
        </div>
    );
}
export default ButtonRadio;

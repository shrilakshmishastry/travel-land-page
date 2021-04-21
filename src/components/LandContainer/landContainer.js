import React from "react";
import NavBar from "./navBar";
import HeadingWithNav from "./headingWIthNav";

const LandContainer = () =>{
    const c1 = React.useRef(null);
    const c2 = React.useRef(null);

    React.useEffect(()=>{
        // handleCarousel();
    },);
    const handleCarousel = () =>{

        setTimeout(()=>{
            handleCarousel();
            if(c1.current.classList.contains('hidden')){
                c1.current.classList.remove('hidden');
                c2.current.classList.add('hidden');

            }else{
                c2.current.classList.remove('hidden');
                c1.current.classList.add('hidden');
            }
        },[8000]);
    }

    const handleFirstBtnClick = () =>{
        console.log(document.getElementById("btn1"));
        document.getElementById("btn1").focus();
        c1.current.classList.remove('hidden');
        c2.current.classList.add('hidden');
        clearInterval(8000);
    }
    const handleSecondBtnClick = () =>{
        console.log("second");
        c2.current.classList.remove('hidden');
        c1.current.classList.add('hidden');
        clearInterval(8000);
    }

    return(
        <div className="" >
          <div  ref={c1} id={"e1"}
                className="carousel-1 flex flex-col "
          >
                <NavBar/>
                <HeadingWithNav firstBtn={handleFirstBtnClick} SecondBtn={handleSecondBtnClick} />
              <button id={"btn1"} onClick={handleFirstBtnClick}>first</button>
              <button id={"btn2"} onClick={handleSecondBtnClick}>second</button>
          </div>
            <div ref={c2} id={"e2"}   className="carousel-2 bg-green-500 hidden">
                <NavBar/>
                <button id={"btn1"} onClick={handleFirstBtnClick}>first</button>
                <button  id={"btn2"}   onClick={handleSecondBtnClick}>second</button>
            </div>
        </div>
    );
};
export default LandContainer;

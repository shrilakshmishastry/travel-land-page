import React from "react";

const NavBar = ()=>{
    const ref1 = React.useRef(null);
    const handleClick = () =>{
        if(ref1.current.classList.contains("hidden")){
            ref1.current.classList.remove("hidden");
            ref1.current.classList.add("flex-col");
        }else{
            ref1.current.classList.remove("flex-col");
            ref1.current.classList.add("hidden");
        }
    }
    return(
        <nav className="flex  flex-col mx-2 md:mx-0  py-4 md:flex-row justify-between ">

            <div className="flex flex-row  justify-between">
                <a href="#" className="mx-3 md:mx-10 text-primary md:text-2xl font-bold"> JALANIN</a>
                <button aria-label="Main Menu" className="md:hidden " onClick={handleClick}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
                    </svg>
                </button>
            </div>

            <ul ref={ref1} className="md:mr-5  hidden  lg:flex lg:flex-row ">
                <li className="mx-5 my-3 md:my-2   " role="link">
                    <a href="/" >Home</a>
                </li>
                <li className="mx-5 my-3 md:my-2  " role="link">
                    <a href="/" >About</a>
                </li>
                <li className="mx-5 my-3 md:my-2  " role="link">
                    <a href="/" >Features</a>
                </li>
                <li className="mx-5 my-3 md:my-2 " role="link">
                    <a href="/" >News</a>
                </li>
                <li className="mx-5 my-3 md:my-2  " role="link">
                    <a href="/" >Contact</a>
                </li>
                <li className="mx-5 my-3 md:my-0 grid grid-cols-1" role="link">
                    <button className="btn py-2 text-white bg-primary  md:px-9 font-bold ">
                        Login
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;

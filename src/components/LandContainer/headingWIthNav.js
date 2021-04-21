import React from "react";

const HeadingWithNav = ({firstBtn,SecondBtn}) =>{
    return(
        <div className="grid grid-rows-2 grid-cols-12 md:grid-rows-1 md:grid-cols-6">
            <div className="bg-green-500 col-span-12 md:col-span-5 flex">
                <h1 className="">hello
                </h1>
            </div>
            <div className="bg-red-200 col-span-12 md:col-span-1">
                world
            </div>
        </div>
    );
}
export default HeadingWithNav;

/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-8 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="n-left flex item-center">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Cluture", "", "News"].map((elem, index) => (
          elem.length === 0 ? <span key={index} className="w-0.5 h-5 bg-zinc-700"></span> : (
            <a key={index} href="#" className="font-regular text-sm flex item-center gap-1">
            {index === 1 && (<span style={{boxShadow: "0 0 0.45rem #00FF19"}} className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>) }
            {elem}
          </a>
          )
          
        ))}
      </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;

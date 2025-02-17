/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Card({ width, start, para, hover="false" }) {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: "25px"}} className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[40rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

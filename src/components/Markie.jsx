/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";

function Markie({ imagesUrl, direction }) {
  return (
    <motion.div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {Array.isArray(imagesUrl) &&
          imagesUrl.map((url, index) => (
            <img key={index} src={url} className="w-[10vw] flex-shrink-0" />
          ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {Array.isArray(imagesUrl) &&
          imagesUrl.map((url, index) => (
            <img key={index} src={url} className="w-[10vw] flex-shrink-0" />
          ))}
      </motion.div>
    </motion.div>
  );
}

export default Markie;

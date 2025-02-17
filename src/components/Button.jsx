/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({title = 'Get Started'}) => {
  return (
    <div className='min-w-40 px-4 py-2  bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <FaLongArrowAltRight />
    </div>
  )
}

export default Button

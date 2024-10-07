import React from 'react'
import { Link } from "react-router-dom";

const diabeties = () => {
  return (
    <>
      <div> diabeties </div>
      <div className="flex items-center justify-center">
        <Link className='font-satoshi text-white text-3xl flex items-center justify-center mt-4 bg-slate-800 hover:bg-slate-500 duration-100 rounded-lg p-3' to={'/'}>
          Click here to go back to the home page
        </Link>
      </div>
    </>
  )
}

export default diabeties
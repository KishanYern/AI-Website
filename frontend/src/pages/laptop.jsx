import React from 'react'
import LaptopForm from '../components/modelForms/laptopForm';
import { Link } from "react-router-dom";

const laptop = () => {
  return (
    <div className='flex items-center justify-center flex-row bg-gray-300 pb-10 w-full'>
      <div className='w-[25%] flex flex-col gap-10 justify-center items-center flex-2 pb-52'>
        <div className='text-3xl'>
          Before You Start
        </div>
        <div className='text-xl'>
          Information
        </div>
      </div>
      <div className='flex-1'>
          <LaptopForm />
          <div className="flex items-center justify-center">
              <Link className='font-satoshi text-white text-3xl flex items-center justify-center mt-10 bg-slate-800 hover:bg-slate-500 duration-100 rounded-lg p-3' to={'/'}>
                Home page
              </Link>
          </div>
      </div>
    </div>
  )
}

export default laptop
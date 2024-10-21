import React from 'react';
import DiabetiesForm from '../components/modelForms/diabetiesForm';
import { Link } from "react-router-dom";

const Laptop = () => {
  return (
    <div className='flex items-start justify-center flex-row bg-gray-300 pb-10 w-full min-h-screen'>
      <div className='w-[25%] flex flex-col gap-10 justify-start items-center pt-10'>
        <div className='text-3xl'>
          Before You Start
        </div>
        <div className='text-xl text-center px-4'>
          Please note that this model should not replace any professional appraisal. The results generated are based on our learning and may not be 100% accurate. Always consult a qualified professional for precise evaluations.
          <br />
          Also note that the data used to train these models are from India, and thus uses Indian currency translated into USD.
        </div>
      </div>
      <div className='flex-1'>
          <DiabetiesForm />
          <div className="flex items-center justify-center">
              <Link className='font-satoshi text-white text-3xl flex items-center justify-center mt-10 bg-slate-800 hover:bg-slate-500 duration-100 rounded-lg p-3' to={'/'}>
                Home page
              </Link>
          </div>
      </div>
    </div>
  );
}

export default Laptop;

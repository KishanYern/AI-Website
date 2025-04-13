import React, { useState } from 'react';
import LungCancerForm from '../components/modelForms/lungCancerForm';
import { Link } from 'react-router-dom';

const LungCancer = () => {
  const [warning, setWarning] = useState(true);

  return (
    <div className='flex items-start justify-center flex-row bg-blue-100 pb-10 w-full min-h-screen relative'>
      <div className='flex-1'>
        {warning && (
          <button
            onClick={() => setWarning(false)}
            className='w-full h-full px-[25%] text-center text-white bg-gray-800 flex flex-col gap-10 justify-start items-center pt-[10%] absolute opacity-90 z-10 font-satoshi'
          >
            <div className='text-5xl opacity-95'>
              Before You Start
            </div>
            <div className='text-3xl text-center px-4 opacity-95'>
              Please note that this AI-based lung cancer prediction model should not replace any professional medical diagnosis or advice. The predictions provided are generated using artificial intelligence and may not be 100% accurate. Always consult a qualified healthcare provider for a proper evaluation. No data source information is available.
            </div>
          </button>
        )}
        <LungCancerForm />
        <div className="flex items-center justify-center">
          <Link
            className='font-satoshi text-white text-3xl flex items-center justify-center mt-10 bg-slate-800 hover:bg-slate-500 duration-100 rounded-lg p-3'
            to={'/'}
          >
            Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LungCancer;

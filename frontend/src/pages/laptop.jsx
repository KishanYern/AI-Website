import React, {useState} from 'react';
import LaptopForm from '../components/modelForms/laptopForm';
import { Link } from "react-router-dom";

const Laptop = () => {

  const [warning, setWarning] = useState(true);

  return (
    <div className='flex items-start justify-center flex-row bg-blue-100 pb-10 w-full min-h-screen relative'>
      <div className='flex-1'>
      {warning && (
                        <button onClick={() => setWarning(false)} className='w-full h-full px-[25%] text-center text-white bg-gray-800 flex flex-col gap-10 
                        justify-start items-center pt-[10%] absolute opacity-90 z-10 font-satoshi'>
                            <div className='text-5xl opacity-95'>
                            Before You Start
                            </div>
                            <div className='text-3xl text-center px-4 opacity-95'>
                            Please note that this model should not replace any professional appraisal. The results generated are based on our learning and may not 
                            be 100% accurate. Always consult a qualified professional for precise evaluations.
                            <br />
                            Also note that the data used to train these models are from India, and thus uses Indian currency translated into USD.
                            </div>
                        </button>
            )}
          <LaptopForm />
          <div className="flex items-center justify-center">
              <Link className='font-satoshi text-white text-3xl flex items-center justify-center mt-10 bg-[#1F487E] hover:bg-[#376996] duration-100 rounded-lg p-3' to={'/'}>
                Home page
              </Link>
          </div>
      </div>
    </div>
  );
}

export default Laptop;

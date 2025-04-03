import React, { useState } from 'react';
import ExpenseForm from '../components/modelForms/expenseForm';
import { Link } from "react-router-dom";

const diabeties = () => {

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
                            This model was built using the Patient Risk Profile dataset from kaggle. This dataset contains 100 simulated patient's medical history 
                            features and the predicted 1-year risk of 14 outcomes based on each patient's medical history features. The predictions used real logistic 
                            regression models developed on a large real world healthcare dataset.
                            </div>
                        </button>
            )}
          <ExpenseForm />
          <div className="flex items-center justify-center">
              <Link className='font-satoshi text-white text-3xl flex items-center justify-center mt-10 bg-slate-800 hover:bg-slate-500 duration-100 rounded-lg p-3' to={'/'}>
                Home page
              </Link>
          </div>
      </div>
    </div>
  );
}

export default diabeties;

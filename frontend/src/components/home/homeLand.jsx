import React from 'react';

const homeLand = () => {
    return (
        <section
            className='bg-gradient-to-b from-slate-600 to-slate-200 flex justify-center 
        items-center flex-col gap-10 pt-80 pb-64'
        >
            <div className=' font-bold text-6xl font-amulya flex justify-center items-center'>
                Machine Learning Prediction Website
            </div>
            <div className='text-xl pb-24 font-synonym flex justify-center items-center'>
                A website to make the machine learning models created available
                for public use and testing.
            </div>
        </section>
    );
};
export default homeLand;

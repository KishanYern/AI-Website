import React from 'react';
import { FaGithub } from 'react-icons/fa';
import background from '../../public/background.jpg';

const homeLand = () => {
    return (
        <section
            className='h-lvh bg-gradient-to-b from-slate-600 to-slate-200 flex justify-center 
        items-center flex-col gap-10'
        >
            <div className=' font-bold text-6xl font-amulya'>
                Machine Learning Prediction Website
            </div>
            <div className='text-xl pb-24 font-synonym'>
                A website to make the machine learning models created available
                for public use and testing.
            </div>
        </section>
    );
};
export default homeLand;

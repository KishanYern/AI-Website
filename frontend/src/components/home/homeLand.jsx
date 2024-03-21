import React from 'react';
import { FaGithub } from 'react-icons/fa';

const homeLand = () => {
    return (
        <section
            className='h-lvh bg-gradient-to-br from-slate-600 to-slate-200 flex justify-center 
        items-center flex-col gap-10'
        >
            <div className=' font-bold text-6xl'>
                Machine Learning Prediction Website
            </div>
            <div className='text-xl pb-24'>
                A website to make the machine learning models created available
                for public use and testing.
            </div>
            <a
                href='https://github.com/KishanYern/AI-Website'
                target='_blank'
                className='hover:scale-110 duration-300 transform transition 
                cursor-pointer hover:bg-slate-400 p-2 rounded-full bg-slate-300'
            >
                <FaGithub size={70} />
            </a>
        </section>
    );
};
export default homeLand;

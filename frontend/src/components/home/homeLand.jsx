import React from 'react';
import { FaGithub } from 'react-icons/fa';

const homeLand = () => {
    return (
        <section
            className='bg-gradient-to-b from-slate-600 to-slate-200 flex justify-center 
        items-center flex-col gap-10 pt-56 pb-56'
        >
            <div className=' font-bold text-6xl font-amulya flex justify-center items-center'>
                Machine Learning Prediction Website
            </div>
            <div className='text-xl pb-24 font-synonym flex justify-center items-center'>
                A website to make the machine learning models created available
                for public use and testing.
            </div>
            <a
                className='text-3xl bg-slate-200 h-20 w-28 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-110 
                    hover:shadow-2xl hover:text-slate-600 z-10 mr-10 mt-10 duration-200'
                rel='noreferrer'
                href='https://github.com/KishanYern/AI-Website'
                target='_blank'
            >
                <button>
                    <FaGithub size={45} className='text-3xl' />
                </button>
            </a>
        </section>
    );
};
export default homeLand;

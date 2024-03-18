import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../public/DS-bg.jpg';

const Home = () => {
    return (
        <main
            className=' h-dvh w-full bg-gradient-to-b from-green-300 to-red-300'
            style={{
                backgroundImage: `url(${''})`, // put in design system background
            }}
        >
            <div className='text-5xl flex justify-center items-center'>
                Hello
            </div>
        </main>
    );
};
export default Home;

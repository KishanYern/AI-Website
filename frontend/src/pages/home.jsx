import React from 'react';
import HomeLanding from '../components/home/homeLand';
import NavBar from '../components/NavBar'
import HomeAbout from '../components/home/homeAbout';
import HomeModels from '../components/home/homeModels';

const Home = () => {
    return (
        <main className='h-full w-full'>
            <NavBar />
            <div className='pt-20'>
                <HomeLanding />
                <HomeAbout />
                <HomeModels />
            </div>
        </main>
    );
};
export default Home;

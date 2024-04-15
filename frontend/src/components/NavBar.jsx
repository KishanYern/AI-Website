import React from 'react';

const NavBar = () => {
    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About',
        },
        {
            id: 3,
            link: 'ML Models',
        },
    ];

    return (
        <nav className='h-20 bg-transparent w-full flex justify-between items-center px-4 text-2xl font-mate fixed'>
            <div className='text-4xl font-signature'>
                Machine Learning Predictions
            </div>
            <ul className='flex flex-row gap-7'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-4 cursor-pointer capitalize text-black-500 
                        hover:scale-105 duration-200 hover:text-red-500 z-10 font-synonym'
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </nav>
    );
}; // need to add smooth scroll

export default NavBar;

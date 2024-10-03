import React from 'react';
import { aboutSection } from '../../../public/aboutData';

const homeAbout = () => {
    return <div className="bg-gradient-to-b from-slate-200 to-blue-100 flex justify-center 
        items-center flex-col gap-10 pl-32 pr-32 pb-56">
        <div className=' text-5xl'>
            About This Website!
        </div>
        <div>
            {
                aboutSection.map( paragraph => {
                    return <div className='text-xl pb-10 font-trenchSlab flex justify-center items-center'> {paragraph} </div>
                })
            }
        </div>
    </div>;
};
export default homeAbout;

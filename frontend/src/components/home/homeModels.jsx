import React from 'react'
import { Link } from "react-router-dom";
import CardData from '../../../public/modelData'

const homeModels = () => {
  return (
    <div className='bg-gradient-to-b from-blue-100 to-red-200 flex justify-center 
        items-center flex-col gap-10 pb-56'>
        <div className=' text-5xl pb-10'>
            Models
        </div>
        <div className='flex justify-center items-center gap-10 flex-row flex-wrap'>
            {CardData.map( card => {
                return <Link key={card.key} to={card.link}>
                    <div id={card.key} key={card.key} className='text-xl text-black rounded-xl p-2 h-auto md:h-5/6 w-auto cursor-pointer
                        shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:scale-105 
                        hover:shadow-2xl duration-200 bg-gradient-to-br from-red-100 to-red-50 font-projects'>
                        {card.title}
                    </div>
                </Link>
            })}
        </div>
    </div>
  )
}

export default homeModels
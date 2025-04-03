import React from 'react';
import sourceDataList from '../../public/sourceData';
import { IoIosLink } from "react-icons/io";

const Sources = () => {
    return (
        <div className="min-h-screen bg-blue-50 p-4 md:p-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center"> Data Sources </h1>
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
                {sourceDataList.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <IoIosLink />
                                </div>
                                <h2 className="ml-3 text-xl font-semibold text-blue-900">{item.title}</h2>
                            </div>
                            
                            <p className="text-blue-700 mb-4">
                                {item.description || "No description available"}
                            </p>
                            
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                Visit Source
                                <svg 
                                    className="w-4 h-4 ml-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sources;
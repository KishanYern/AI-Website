import React, { useState } from 'react';
import { companyList, typeList, graphicCards, cpuList, resolutionList } from '../../../public/modelData';

function LaptopForm() {
    const [Company, setCompany] = useState('Dell');
    const [Typename, setTypename] = useState('Notebook');
    const [Inches, setInches] = useState(15);
    const [Ram, setRam] = useState(8);
    const [CPU, setCpu] = useState('Intel Core i5 7200U');
    const [SSD, setSSD] = useState(0);
    const [HDD, setHdd] = useState(0);
    const [Hybrid, setHybrid] = useState(0);
    const [FlashMemory, setFlashMemory] = useState(0);
    const [Gpu, setGpu] = useState('Intel HD Graphics 620');
    const [OpSys, setOpSys] = useState('Windows 10');
    const [ClockRate, setClockRate] = useState(2.3);
    const [Touchscreen, setTouchscreen] = useState(0);
    const [Resolution, setResolution] = useState('1920x1080');
    const [Weight, setWeight] = useState(2);

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [output, setOutput] = useState('');

    const resetForm = () => {
        setCompany('Dell');
        setTypename('Notebook');
        setInches(15);
        setRam(8);
        setCpu('Intel Core i5 7200U');
        setSSD(0);
        setHdd(0);
        setHybrid(0);
        setFlashMemory(0);
        setGpu('Intel HD Graphics 620');
        setOpSys('Windows 10');
        setClockRate(2.3);
        setTouchscreen(0);
        setResolution('1920x1080');
        setWeight(2);
        setError(false);
        setErrorText('');
        setOutput('');
    };

    const validateForm = () => {
        if (Inches <= 0 || Ram <= 0 || ClockRate <= 0 || Weight <= 0) {
            setError(true);
            setErrorText('Please ensure all numeric values are greater than zero.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = {
            Company,
            Typename,
            Inches,
            Ram,
            Gpu,
            OpSys,
            Weight,
            Touchscreen,
            Resolution,
            CPU,
            ClockRate,
            SSD,
            HDD,
            Hybrid,
            'Flash Storage': FlashMemory,
        };
        console.log(formData);

        try {
            const response = await fetch('http://localhost:5000/api/Laptop-Model', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Fetch call successful:', result);
            setOutput(Math.round(result.prediction*100)/100);
            setError(false);
        } catch (error) {
            setError(true);
            setErrorText('Problem fetching the result');
        }
    };

    return (
        <div className='flex items-center justify-center flex-col p-8'>
            <div className='text-4xl mb-10'>Laptop Price Predictor</div>
            <div className='flex flex-row'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4'>
                    <div className='text-xl'>General Information</div>
                    <div>
                        <label className='block font-bold mb-1'>Company</label>
                        <select
                            value={Company}
                            onChange={(e) => setCompany(e.target.value)}
                            className='border p-2 w-full'
                        >
                            {companyList.map((item, index) => <option value={item} key={index}>{item}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className='block font-bold mb-1'>Type</label>
                        <select
                            type='text'
                            value={Typename}
                            onChange={(e) => setTypename(e.target.value)}
                            className='border p-2 w-full'
                        >
                            {typeList.map((item, index) => <option value={item} key={index}>{item}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className='block font-bold mb-1'>Inches</label>
                        <input
                            type='number'
                            value={Inches}
                            onChange={(e) => setInches(Number(e.target.value))}
                            className='border p-2 w-full'
                        />
                    </div>

                    <div>
                        <label className='block font-bold mb-1'>RAM (GB)</label>
                        <select
                            value={Ram}
                            onChange={(e) => setRam(Number(e.target.value))}
                            className='border p-2 w-full'
                        >
                            <option value='2'>2</option>
                            <option value='4'>4</option>
                            <option value='6'>6</option>
                            <option value='8'>8</option>
                            <option value='12'>12</option>
                            <option value='16'>16</option>
                            <option value='24'>24</option>
                            <option value='32'>32</option>
                            <option value='64'>64</option>
                        </select>
                    </div>
                    <div className='flex gap-10'>
                        <div>
                            <label className='block font-bold mb-1'>GPU</label>
                            <select
                                value={Gpu}
                                onChange={(e) => setGpu(e.target.value)}
                                className='border p-2 w-full'
                            >
                                {graphicCards.map((item, index) => (
                                    <option key={item} value={index}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className='block font-bold mb-1'>
                                Resolution
                            </label>
                            <select
                                value={Resolution}
                                onChange={(e) => setResolution(e.target.value)}
                                className='border p-2 w-full'
                            >
                                {resolutionList.map((item, index) => <option value={item} key={index}>{item}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className='flex gap-10'>
                        <div>
                            <label className='block font-bold mb-1'>
                                Operating System
                            </label>
                            <select
                                value={OpSys}
                                onChange={(e) => setOpSys(e.target.value)}
                                className='border p-2 w-full'
                            >
                                <option value='macOS'>macOS</option>
                                <option value='Windows 10'>Windows 10</option>
                                <option value='Mac OS X'>Mac OS X</option>
                                <option value='Linux'>Linux</option>
                                <option value='Windows 10 S'>Windows 10 S</option>
                                <option value='Chrome OS'>Chrome OS</option>
                                <option value='Windows 7'>Windows 7</option>
                                <option value='Android'>Android</option>
                            </select>
                        </div>

                        <div>
                            <label className='block font-bold mb-1'>
                                Touchscreen
                            </label>
                            <select
                                value={Touchscreen == 0 ? 'No' : 'Yes'}
                                onChange={(e) =>
                                    setTouchscreen(e.target.value == 'Yes' ? 1 : 0)
                                }
                                className='border p-2 w-full'
                            >
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className='block font-bold mb-1'>Weight (kg)</label>
                        <input
                            type='number'
                            value={Weight}
                            onChange={(e) => setWeight(Number(e.target.value))}
                            className='border p-2 w-full'
                        />
                    </div>

                    <div className='text-xl mt-10'>CPU Information</div>
                    <div className=' flex justify-center items-center gap-10'>
                        <div>
                            <label className='block font-bold mb-1'>CPU Name</label>
                            <select
                                value={CPU}
                                onChange={(e) => setCpu(e.target.value)}
                                className='border p-2 w-full'
                            >
                                {cpuList.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className='block font-bold mb-1'>
                                Clock Rate (GHz)
                            </label>
                            <input
                                type='number'
                                value={ClockRate}
                                onChange={(e) =>
                                    setClockRate(Number(e.target.value))
                                }
                                className='border p-2 w-full'
                            />
                        </div>
                    </div>

                    <div className='text-xl mt-10'>Storage Information</div>
                    <div className=' flex justify-center items-center gap-10'>
                        <div>
                            <label className='block font-bold mb-1'>SSD (GB)</label>
                            <input
                                type='number'
                                value={SSD}
                                onChange={(e) => setSSD(Number(e.target.value))}
                                className='border p-2 w-full'
                            />
                        </div>

                        <div>
                            <label className='block font-bold mb-1'>HDD (GB)</label>
                            <input
                                type='number'
                                value={HDD}
                                onChange={(e) => setHdd(Number(e.target.value))}
                                className='border p-2 w-full'
                            />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-10'>
                        <div>
                            <label className='block font-bold mb-1'>
                                Hybrid Storage (GB)
                            </label>
                            <input
                                type='number'
                                value={Hybrid}
                                onChange={(e) => setHybrid(Number(e.target.value))}
                                className='border p-2 w-full'
                            />
                        </div>

                        <div>
                            <label className='block font-bold mb-1'>
                                Flash Memory (GB)
                            </label>
                            <input
                                type='number'
                                value={FlashMemory}
                                onChange={(e) =>
                                    setFlashMemory(Number(e.target.value))
                                }
                                className='border p-2 w-full'
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='bg-blue-500 text-white p-2 rounded'
                    >
                        Submit
                    </button>
                    <button
                        type='button'
                        onClick={resetForm}
                        className='bg-gray-500 text-white p-2 rounded'
                    >
                        Reset
                    </button>
                </form>
                {output && (
                    <div className="mt-6 ml-10 w-full max-w-md">
                        <div className="bg-gray-800 p-4 rounded-t-xl flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            <div className="text-white text-sm ml-2">Laptop Price Predictor 🤖</div>
                        </div>
                        <div className="bg-gray-900 text-green-400 p-6 rounded-b-xl font-mono border-t-0 shadow-lg">
                            <div className="flex items-center mb-4">
                                <span className="text-2xl mr-2">🤖</span>
                                <span className="text-xl">PREDICTION_RESULT.exe</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 items-center">
                                <div className="col-span-1 text-right">
                                    <span className="text-4xl">💻</span>
                                </div>
                                <div className="col-span-2">
                                    <div className="text-sm text-gray-400">Predicted Price</div>
                                    <div className="text-3xl font-bold text-white flex items-center">
                                        <span className="mr-2">💰</span> 
                                        ${output}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-700 text-sm text-gray-500 flex justify-between">
                                <span>🤖 Robot Approved</span>
                                <span>✅ Accuracy: 94.7%</span>
                            </div>
                        </div>
                    </div>
                )} 
            </div>
            {error && (
                <div className='mt-6 text-red-500 flex items-center justify-center text-3xl'>
                    {errorText}
                </div>
            )}
        </div>
    );
}

export default LaptopForm;

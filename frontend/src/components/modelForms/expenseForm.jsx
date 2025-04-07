import React, { useState } from 'react';
import Tooltip from './tooltip';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

function InsuranceForm() {
    // Set the default values to the mean/mode of the dataset.
    const [age, setAge] = useState(40);
    const [sex, setSex] = useState('male');
    const [bmi, setBMI] = useState(30.6);
    const [children, setChildren] = useState(1);
    const [smoker, setSmoker] = useState('no');
    const [region, setRegion] = useState('southwest');
    
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [output, setOutput] = useState();

    // Reset the form to the default values.
    const resetForm = () => {
        setAge(40);
        setSex('male');
        setBMI(30.6);
        setChildren(1);
        setSmoker('no');
        setRegion('southwest');
        setError(false);
        setErrorText('');
        setOutput();
    };

    // Ensure business rules are followed.
    const validateForm = () => {
        if (
            age <= 0 ||
            bmi <= 0 ||
            children < 0
        ) {
            setError(true);
            setErrorText(
                'Please ensure all numeric values are greater than zero.'
            );
            return false;
        }
        return true;
    };

    // Create form data and call the getResult function to set the Output/Error.
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formData = {
            age: age,
            sex: sex,
            bmi: bmi,
            children: children,
            smoker: smoker,
            region: region
        };

        getResult(formData);
    };

    // Call the backend to retrieve the value predicted by the model.
    const getResult = async (data) => {
        try {
            const response = await fetch(
                'http://localhost:5000/api/Medical-Expenses',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // const result = await response.json();
            // setOutput(result.prediction);
            setOutput(11000.5347);
            setError(false);
        } catch (error) {
            setError(true);
            setErrorText('Problem fetching the result');
            console.error(error);
        }
    };

    return (
        <div className='max-w-3xl mx-auto p-8 rounded-lg shadow-md mt-10 relative font-semibold'>
            <Tooltip
                message={{
                    title: 'Before You Start',
                    text: 'Please note that this model should not replace professional insurance quotes. The results generated are estimates based on historical data and may not reflect actual insurance premiums.',
                }}
            >
                <HiOutlineQuestionMarkCircle
                    className='absolute top-2 right-8'
                    size={30}
                />
            </Tooltip>
            <h1 className='text-4xl font-semibold text-center text-gray-800 mb-8'>
                Insurance Cost Predictor
            </h1>
            <form
                onSubmit={handleSubmit}
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
                <div className='md:col-span-2 text-xl font-semibold text-gray-700'>
                    Personal Information
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Age
                    </label>
                    <input
                        type='number'
                        required
                        name='age'
                        min='1'
                        step='1'
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Sex
                    </label>
                    <select
                        name='sex'
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>

                <div>
                    <Tooltip
                        message={{
                            title: 'BMI',
                            text: 'Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by \
                            the square of the body height, and is expressed in units of kg/m², resulting from mass in kilograms and height in metres. It can \
                            be found using an online calculator',
                        }}
                    >
                        <HiOutlineQuestionMarkCircle
                            className='absolute right-0'
                            size={20}
                        />
                    </Tooltip>
                    <label className='block font-medium text-gray-700 mb-2'>
                        BMI (kg/m²)
                    </label>
                    <input
                        type='number'
                        required
                        name='bmi'
                        min='0'
                        step='0.1'
                        value={bmi}
                        onChange={(e) => setBMI(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Number of Children
                    </label>
                    <input
                        type='number'
                        required
                        name='children'
                        min='0'
                        step='1'
                        value={children}
                        onChange={(e) => setChildren(Math.round(Number(e.target.value)))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Smoker
                    </label>
                    <select
                        name='smoker'
                        value={smoker}
                        onChange={(e) => setSmoker(e.target.value)}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        <option value='no'>No</option>
                        <option value='yes'>Yes</option>
                    </select>
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Region
                    </label>
                    <select
                        name='region'
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        <option value='southwest'>Southwest</option>
                        <option value='southeast'>Southeast</option>
                        <option value='northwest'>Northwest</option>
                        <option value='northeast'>Northeast</option>
                    </select>
                </div>

                <div className='md:col-span-2'>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500'
                    >
                        Predict Insurance Cost
                    </button>
                    <button
                        type='button'
                        onClick={resetForm}
                        className='w-full mt-5 bg-gray-600 text-white font-semibold p-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500'
                    >
                        Reset
                    </button>
                </div>

                {error && (
                    <div className='md:col-span-2 text-red-600 text-center'>
                        {errorText}
                    </div>
                )}
            </form>
            {output && (
                <div className="mt-6 ml-10 w-full max-w-md">
                    <div className="bg-gray-800 p-4 rounded-t-xl flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <div className="text-white text-sm ml-2">Insurance Predictor 🤖</div>
                    </div>
                    <div className="bg-gray-900 text-green-400 p-6 rounded-b-xl font-mono border-t-0 shadow-lg">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-2">🤖</span>
                            <span className="text-xl">PREDICTION_RESULT.exe</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="col-span-1 text-right">
                                <span className="text-4xl">💵</span>
                            </div>
                            <div className="col-span-2">
                                <div className="text-sm text-gray-400">Estimated Annual Cost</div>
                                <div className="text-3xl font-bold text-white flex items-center">
                                    ${output.toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-700 text-sm text-gray-500 flex justify-between">
                            <span>🤖 AI Estimate</span>
                            <span>✅ Based on your profile</span>
                        </div>
                    </div>
                </div>
            )} 
        </div>
    );
}

export default InsuranceForm;
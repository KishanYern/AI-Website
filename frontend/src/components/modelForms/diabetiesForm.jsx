import React, { useState } from 'react';
import Tooltip from './tooltip';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

function DiabetiesForm() {
    const [pregnancies, setPregnancies] = useState(3);
    const [glucose, setGlucose] = useState(120);
    const [bp, setBP] = useState(70);
    const [skinThickness, setSkinThickness] = useState(20);
    const [insulin, setInsulin] = useState(80);
    const [bmi, setBMI] = useState(32);
    const [diabetesRisk, setDiabetesRisk] = useState(0.5);
    const [age, setAge] = useState(33);

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [output, setOutput] = useState();

    const resetForm = () => {
        setPregnancies(3);
        setGlucose(120);
        setBP(70);
        setSkinThickness(20);
        setInsulin(80);
        setBMI(32);
        setDiabetesRisk(0.5);
        setAge(33);
        setError(false);
        setErrorText('');
        setOutput();
    };

    const validateForm = () => {
        if (
            pregnancies < 0 ||
            glucose <= 0 ||
            bp <= 0 ||
            skinThickness <= 0 ||
            insulin <= 0 ||
            bmi <= 0 ||
            diabetesRisk <= 0 || diabetesRisk > 1 ||
            age <= 0
        ) {
            setError(true);
            setErrorText(
                'Please ensure all numeric values are greater than zero or adhere to the guidelines.'
            );
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formData = {
            Pregnancies: pregnancies,
            Glucose: glucose,
            BloodPressure: bp,
            SkinThickness: skinThickness,
            Insulin: insulin,
            BMI: bmi,
            DiabetesPedigreeFunction: diabetesRisk,
            Age: age,
        };

        getResult(formData);
    };

    const getResult = async (data) => {
        try {
            const response = await fetch(
                'http://localhost:5000/api/Diabeties-Model',
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

            const result = await response.json();

            const prediction = result.prediction == 0 ? 'No' : 'Yes';

            setOutput(prediction);
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
                    text: 'Please note that this model should not replace any professional appraisal. The results generated are based on our learning and may not be 100% accurate. Always consult a \
                qualified professional for precise evaluations. Also note that the data used to train these models are from India, and consist female patients of at least 21 years old and of Pima Indian heritage.',
                }}
            >
                <HiOutlineQuestionMarkCircle
                    className='absolute top-2 right-8'
                    size={30}
                />
            </Tooltip>
            <h1 className='text-4xl font-semibold text-center text-gray-800 mb-8'>
                Diabeties Risk Predictor
            </h1>
            <form
                onSubmit={handleSubmit}
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
            >
                <div className='md:col-span-2 text-xl font-semibold text-gray-700'>
                    General Information
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Pregnancies
                    </label>
                    <input
                        type='number'
                        required
                        name='pregnancies'
                        min='0'
                        step='1'
                        value={pregnancies}
                        onChange={(e) =>
                            setPregnancies(Math.round(Number(e.target.value)))
                        }
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Glucose (mg/dl)
                    </label>
                    <input
                        type='number'
                        required
                        name='glucose'
                        min='0'
                        step='0.1'
                        value={glucose}
                        onChange={(e) => setGlucose(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        BloodPressure (mmHg)
                    </label>
                    <input
                        type='number'
                        required
                        name='BP'
                        min='0'
                        step='1'
                        value={bp}
                        onChange={(e) => setInches(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Skin Thickness (mm)
                    </label>
                    <input
                        type='number'
                        required
                        name='SkinThickness'
                        min='0'
                        step='0.1'
                        value={skinThickness}
                        onChange={(e) =>
                            setSkinThickness(Number(e.target.value))
                        }
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Insulin (mg/dl)
                    </label>
                    <input
                        type='number'
                        required
                        name='Insulin'
                        min='0'
                        step='0.1'
                        value={insulin}
                        onChange={(e) => setInsulin(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
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
                        BMI (kg/m<sup>2</sup>)
                    </label>
                    <input
                        type='number'
                        required
                        name='BMI'
                        min='0'
                        step='0.1'
                        value={bmi}
                        onChange={(e) => setBMI(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div className=' relative'>
                    <Tooltip
                        message={{
                            title: 'Diabetes Family Risk',
                            text: 'This is a measure, from 0 to 1, of the effect diabeties has had on your family. For example, if one of your close family members has had diabeties, this value would go up.',
                        }}
                    >
                        <HiOutlineQuestionMarkCircle
                            className='absolute right-0'
                            size={20}
                        />
                    </Tooltip>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Diabetes Family Risk
                    </label>
                    <input
                        type='number'
                        required
                        name='risk'
                        min='0'
                        step='0.01'
                        value={diabetesRisk}
                        onChange={(e) =>
                            setDiabetesRisk(Number(e.target.value))
                        }
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label className='block font-medium text-gray-700 mb-2'>
                        Age
                    </label>
                    <input
                        type='number'
                        required
                        name='age'
                        min='0'
                        step='1'
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div className='md:col-span-2'>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500'
                    >
                        Predict Risk
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
                        <div className="text-white text-sm ml-2">Diabeties Risk Predictor 🤖</div>
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
                                <div className="text-sm text-gray-400">Predicted Risk</div>
                                <div className="text-3xl font-bold text-white flex items-center">
                                    {output}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-700 text-sm text-gray-500 flex justify-between">
                            <span>🤖 Robot Approved</span>
                            <span>✅ Accuracy: 89.42%</span>
                        </div>
                    </div>
                </div>
            )} 
        </div>
    );
}

export default DiabetiesForm;

import React, { useState } from 'react';
import { graphicCardsWithId, cpuListWithId } from '../../../public/modelData';

function LaptopForm() {
    const [Company, setCompany] = useState("Dell");
    const [TypeName, setTypename] = useState("Notebook");
    const [Inches, setInches] = useState(15);
    const [Ram, setRam] = useState(8);
    const [GPU, setGpu] = useState("Intel HD Graphics 620");
    const [OpSys, setOpSys] = useState("Windows 10");
    const [Weight, setWeight] = useState(2);
    const [Touchscreen, setTouchscreen] = useState(0);
    const [Resolution, setResolution] = useState("1920x1080");
    const [CPU, setCpu] = useState("Intel Core i5 7200U");
    const [ClockRate, setClockRate] = useState(2.3);
    const [SSD, setSSD] = useState(0);
    const [HDD, setHdd] = useState(0);
    const [Hybrid, setHybrid] = useState(0);
    const [FlashMemory, setFlashMemory] = useState(0);

    const companyOptions = ["Acer", "Apple", "Asus", "Chuwi", "Dell", "Fujitsu", "Google", "HP", "Huawei", "Lenovo", "LG", "Mediacom", "Microsoft", "MSI", "Razer", "Samsung", "Toshiba", "Vero", "Xiaomi"];
    const typeOptions = ["Convertible", "Gaming", "Netbook", "Notebook", "Ultrabook", "Workstation"];
    const ramOptions = [2, 4, 6, 8, 12, 16, 24, 32, 64];
    const resolutionOptions = ["1366x768", "1440x900", "1600x900", "1920x1080", "1920x1200", "2160x1400", "2256x1504", "2304x1440", "2400x1600", "2560x1440", "2560x1600", "2736x1824", "2880x1800", "3200x1800"];
    const osOptions = ["macOS", "Windows 10", "Mac OS X", "Linux", "Windows 10 S", "Chrome OS", "Windows 7", "Android"];
    const touchscreenOptions = ["Yes", "No"];

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [output, setOutput] = useState([]);

    const resetForm = () => {
        setCompany("Dell");
        setTypename("Notebook");
        setInches(15);
        setRam(8);
        setCpu("Intel Core i5 7200U");
        setSSD(0);
        setHdd(0);
        setHybrid(0);
        setFlashMemory(0);
        setGpu("Intel HD Graphics 620");
        setOpSys("Windows 10");
        setClockRate(2.3);
        setTouchscreen(0);
        setResolution("1920x1080");
        setWeight(2);
        setError(false);
        setErrorText("");
        setOutput([]);
    }; // Interpolate the data if its 0. For example, if weight is 0, replace it with the mean of the weight data.

    const validateForm = () => {
        if (Inches <= 0 || Ram <= 0 || ClockRate <= 0 || Weight <= 0) {
            setError(true);
            setErrorText("Please ensure all numeric values are greater than zero.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) return;

        const formData = {
            Company,
            TypeName,
            Inches,
            Ram,
            Gpu: GPU,
            OpSys,
            Weight,
            Touchscreen,
            Resolution,
            CPU,
            ClockRate,
            SSD,
            HDD,
            Hybrid,
            "Flash Storage": FlashMemory
        };

        getResult(formData);
    };

    const getResult = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/api/Laptop-Model', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            const result_pred = Math.round(result.prediction);
            const error_val = Math.round(result_pred * 0.2); // sets an error of 20%
            const pred_values = [result_pred - error_val, result_pred + error_val];
            setOutput(pred_values);
            setError(false);
        } catch (error) {
            setError(true);
            setErrorText("Problem fetching the result");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Laptop Price Predictor</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 text-xl font-semibold text-gray-700">General Information</div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Company</label>
                    <select value={Company} onChange={(e) => setCompany(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {companyOptions.map(company => (
                            <option key={company} value={company}>{company}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Type</label>
                    <select value={TypeName} onChange={(e) => setTypename(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {typeOptions.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Inches</label>
                    <input type="number" value={Inches} onChange={(e) => setInches(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">RAM (GB)</label>
                    <select value={Ram} onChange={(e) => setRam(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {ramOptions.map(ramSize => (
                            <option key={ramSize} value={ramSize}>{ramSize} GB</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">GPU</label>
                    <select value={GPU} onChange={(e) => setGpu(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {graphicCardsWithId.map(item => <option key={item.id} value={item.card}>{item.card}</option>)}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Resolution</label>
                    <select value={Resolution} onChange={(e) => setResolution(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {resolutionOptions.map(res => (
                            <option key={res} value={res}>{res}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Operating System</label>
                    <select value={OpSys} onChange={(e) => setOpSys(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {osOptions.map(os => (
                            <option key={os} value={os}>{os}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Touchscreen</label>
                    <select value={Touchscreen === 0 ? "No" : "Yes"} onChange={(e) => setTouchscreen(e.target.value === 'Yes' ? 1 : 0)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {touchscreenOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Weight (kg)</label>
                    <input type="number" value={Weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">CPU Name</label>
                    <select value={CPU} onChange={(e) => setCpu(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {cpuListWithId.map(item => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Clock Rate (GHz)</label>
                    <input type="number" value={ClockRate} onChange={(e) => setClockRate(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500">
                        Predict Price
                    </button>
                    <button type="button" onClick={resetForm} className="w-full mt-5 bg-gray-600 text-white font-semibold p-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500">
                        Reset
                    </button>
                </div>

                {error && <div className="md:col-span-2 text-red-600 text-center">{errorText}</div>}
                {output.length != 0 && <div className="md:col-span-2 text-green-600 text-center mt-4">Predicted Price: ${output.at(0)} - ${output.at(1)}</div>}
            </form>
        </div>
    );
}

export default LaptopForm;

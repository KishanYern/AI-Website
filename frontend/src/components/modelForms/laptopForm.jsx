import React, { useState } from 'react';
import { graphicCardsWithId, cpuListWithId } from '../../../public/modelData';

function LaptopForm() {
    const [company, setCompany] = useState("Dell");
    const [typename, setTypename] = useState("Notebook");
    const [inches, setInches] = useState(15);
    const [ram, setRam] = useState(8);
    const [cpu, setCpu] = useState("Intel Core i5 7200U");
    const [ssd, setSSD] = useState(0);
    const [hdd, setHdd] = useState(0);
    const [hybrid, setHybrid] = useState(0);
    const [flashMemory, setFlashMemory] = useState(0);
    const [gpu, setGpu] = useState("Intel HD Graphics 620");
    const [opSys, setOpSys] = useState("Windows 10");
    const [clockRate, setClockRate] = useState(2.3);
    const [touchscreen, setTouchscreen] = useState(0);
    const [resolution, setResolution] = useState("1920x1080");
    const [weight, setWeight] = useState(2);

    const companyOptions = ["Acer", "Apple", "Asus", "Chuwi", "Dell", "Fujitsu", "Google", "HP", "Huawei", "Lenovo", "LG", "Mediacom", "Microsoft", "MSI", "Razer", "Samsung", "Toshiba", "Vero", "Xiaomi"];
    const typeOptions = ["Convertible", "Gaming", "Netbook", "Notebook", "Ultrabook", "Workstation"];
    const ramOptions = [2, 4, 6, 8, 12, 16, 24, 32, 64];
    const resolutionOptions = ["1366x768", "1440x900", "1600x900", "1920x1080", "1920x1200", "2160x1400", "2256x1504", "2304x1440", "2400x1600", "2560x1440", "2560x1600", "2736x1824", "2880x1800", "3200x1800"];
    const osOptions = ["macOS", "Windows 10", "Mac OS X", "Linux", "Windows 10 S", "Chrome OS", "Windows 7", "Android"];
    const touchscreenOptions = ["Yes", "No"];

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [output, setOutput] = useState("");

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
        setOutput("");
    };

    const validateForm = () => {
        if (inches <= 0 || ram <= 0 || clockRate <= 0 || weight <= 0) {
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
            company,
            typename,
            inches,
            ram,
            cpu,
            ssd,
            hdd,
            hybrid,
            flashMemory,
            gpu,
            opSys,
            clockRate,
            touchscreen,
            resolution,
            weight
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
            setOutput(result.prediction);
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
                    <select value={company} onChange={(e) => setCompany(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {companyOptions.map(company => (
                            <option key={company} value={company}>{company}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Type</label>
                    <select value={typename} onChange={(e) => setTypename(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {typeOptions.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Inches</label>
                    <input type="number" value={inches} onChange={(e) => setInches(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">RAM (GB)</label>
                    <select value={ram} onChange={(e) => setRam(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {ramOptions.map(ramSize => (
                            <option key={ramSize} value={ramSize}>{ramSize} GB</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">GPU</label>
                    <select value={gpu} onChange={(e) => setGpu(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {graphicCardsWithId.map(item => <option key={item.id} value={item.card}>{item.card}</option>)}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Resolution</label>
                    <select value={resolution} onChange={(e) => setResolution(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {resolutionOptions.map(res => (
                            <option key={res} value={res}>{res}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Operating System</label>
                    <select value={opSys} onChange={(e) => setOpSys(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {osOptions.map(os => (
                            <option key={os} value={os}>{os}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Touchscreen</label>
                    <select value={touchscreen === 0 ? "No" : "Yes"} onChange={(e) => setTouchscreen(e.target.value === 'Yes' ? 1 : 0)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {touchscreenOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Weight (kg)</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">CPU Name</label>
                    <select value={cpu} onChange={(e) => setCpu(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {cpuListWithId.map(item => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700 mb-2">Clock Rate (GHz)</label>
                    <input type="number" value={clockRate} onChange={(e) => setClockRate(Number(e.target.value))} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500">
                        Predict Price
                    </button>
                </div>

                {error && <div className="md:col-span-2 text-red-600 text-center">{errorText}</div>}
                {output && <div className="md:col-span-2 text-green-600 text-center mt-4">Predicted Price: {output}</div>}
            </form>
        </div>
    );
}

export default LaptopForm;

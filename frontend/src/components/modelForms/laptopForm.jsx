import React, { useState } from 'react';
import { graphicCardsWithId, cpuListWithId } from '../../../public/modelData';

function LaptopForm() {
    // Input fields
    // giving them initial values (mean of the sample data's variables)
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

    // Prediction handling
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [output, setOutput] = useState("");

    const resetForm = () => {
        setCompany("Dell");
        setTypename("Notebook")
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

        if(!validateForm()) return; // ensures positive numeric values

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
            console.log('Fetch call successful')
            console.log(result);
            setOutput(result.prediction);
            setError(false);
        } catch (error) {
            console.error('Error fetching the result:', error);
            setError(true);
            setErrorText("Problem fetching the result");
        }
    }

    return (
        <div className="max-w-lg mx-auto p-8">
            <div className='text-4xl mb-10'>
                Laptop Price Predictor
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div className='text-xl'>
                    General Information
                </div>
                <div>
                    <label className="block font-bold mb-1">Company</label>
                    <select value={company} onChange={(e) => setCompany(e.target.value)} className="border p-2 w-full">
                        <option value="Acer">Acer</option>
                        <option value="Apple">Apple</option>
                        <option value="Asus">Asus</option>
                        <option value="Chuwi">Chuwi</option>
                        <option value="Dell">Dell</option>
                        <option value="Fujitsu">Fujitsu</option>
                        <option value="Google">Google</option>
                        <option value="HP">HP</option>
                        <option value="Huawei">Huawei</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="LG">LG</option>
                        <option value="Mediacom">Mediacom</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="MSI">MSI</option>
                        <option value="Razer">Razer</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Toshiba">Toshiba</option>
                        <option value="Vero">Vero</option>
                        <option value="Xiaomi">Xiaomi</option>
                    </select>
                </div>

                <div>
                    <label className="block font-bold mb-1">Type</label>
                    <select type="text" value={typename} onChange={(e) => setTypename(e.target.value)} className="border p-2 w-full">
                        <option value="Convertible">Convertible</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Netbook">Netbook</option>
                        <option value="Notebook">Notebook</option>
                        <option value="Ultrabook">Ultrabook</option>
                        <option value="Workstation">Workstation</option>
                    </select>
                </div>

                <div>
                    <label className="block font-bold mb-1">Inches</label>
                    <input type="number" value={inches} onChange={(e) => setInches(Number(e.target.value))} className="border p-2 w-full" />
                </div>

                <div>
                    <label className="block font-bold mb-1">RAM (GB)</label>
                    <select value={ram} onChange={(e) => setRam(Number(e.target.value))} className="border p-2 w-full">
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="12">12</option>
                        <option value="16">16</option>
                        <option value="24">24</option>
                        <option value="32">32</option>
                        <option value="64">64</option>
                    </select>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <label className="block font-bold mb-1">GPU</label>
                        <select value={gpu} onChange={(e) => setGpu(e.target.value)} className="border p-2 w-full">
                            {graphicCardsWithId.map(item => <option key={item.id} value={item.card}>{item.card}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-1">Resolution</label>
                        <select value={resolution} onChange={(e) => setResolution(e.target.value)} className="border p-2 w-full">
                            <option value="1366x768">1366x768</option>
                            <option value="1440x900">1440x900</option>
                            <option value="1600x900">1600x900</option>
                            <option value="1920x1080">1920x1080</option>
                            <option value="1920x1200">1920x1200</option>
                            <option value="2160x1400">2160x1400</option>
                            <option value="2256x1504">2256x1504</option>
                            <option value="2304x1440">2304x1440</option>
                            <option value="2400x1600">2400x1600</option>
                            <option value="2560x1440">2560x1440</option>
                            <option value="2560x1600">2560x1600</option>
                            <option value="2736x1824">2736x1824</option>
                            <option value="2880x1800">2880x1800</option>
                            <option value="3200x1800">3200x1800</option>
                        </select>
                    </div>
                </div>
                <div className='flex gap-10'>
                    <div>
                        <label className="block font-bold mb-1">Operating System</label>
                        <select value={opSys} onChange={(e) => setOpSys(e.target.value)} className="border p-2 w-full">
                            <option value="macOS">macOS</option>
                            <option value="Windows 10">Windows 10</option>
                            <option value="Mac OS X">Mac OS X</option>
                            <option value="Linux">Linux</option>
                            <option value="Windows 10 S">Windows 10 S</option>
                            <option value="Chrome OS">Chrome OS</option>
                            <option value="Windows 7">Windows 7</option>
                            <option value="Android">Android</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-bold mb-1">Touchscreen</label>
                        <select value={touchscreen == 0 ? "No" : "Yes"} onChange={(e) => setTouchscreen((e.target.value == 'Yes' ? 1 : 0))} className="border p-2 w-full">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block font-bold mb-1">Weight (kg)</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="border p-2 w-full" />
                </div>

                <div className='text-xl mt-10'>
                    CPU Information
                </div>
                <div className=' flex justify-center items-center gap-10'>
                    <div>
                        <label className="block font-bold mb-1">CPU Name</label>
                        <select value={cpu} onChange={(e) => setCpu(e.target.value)} className="border p-2 w-full">
                            {cpuListWithId.map(item => 
                                <option key={item.id} value={item.name}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <div>
                        <label className="block font-bold mb-1">Clock Rate (GHz)</label>
                        <input type="number" value={clockRate} onChange={(e) => setClockRate(Number(e.target.value))} className="border p-2 w-full" />
                    </div>
                </div>

                <div className='text-xl mt-10'>
                    Storage Information
                </div>
                <div className=' flex justify-center items-center gap-10'>
                    <div>
                        <label className="block font-bold mb-1">SSD (GB)</label>
                        <input type="number" value={ssd} onChange={(e) => setSSD(Number(e.target.value))} className="border p-2 w-full" />
                    </div>

                    <div>
                        <label className="block font-bold mb-1">HDD (GB)</label>
                        <input type="number" value={hdd} onChange={(e) => setHdd(Number(e.target.value))} className="border p-2 w-full" />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10'>
                    <div>
                        <label className="block font-bold mb-1">Hybrid Storage (GB)</label>
                        <input type="number" value={hybrid} onChange={(e) => setHybrid(Number(e.target.value))} className="border p-2 w-full" />
                    </div>

                    <div>
                        <label className="block font-bold mb-1">Flash Memory (GB)</label>
                        <input type="number" value={flashMemory} onChange={(e) => setFlashMemory(Number(e.target.value))} className="border p-2 w-full" />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
                <button type="button" onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">Reset</button>
            </form>
            {output && (
                <div className="mt-6 text-green-500 flex items-center justify-center text-3xl">
                    Predicted Price: {output}
                </div>
            )}
            {error && <div className="mt-6 text-red-500 flex items-center justify-center text-3xl">{errorText}</div>}
        </div>
    );
}

export default LaptopForm;

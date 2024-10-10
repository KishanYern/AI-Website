import React, { useState } from 'react';

function LaptopForm() {
    const [company, setCompany] = useState("");
    const [typename, setTypename] = useState("");
    const [inches, setInches] = useState(0);
    const [ram, setRam] = useState(8);
    const [cpu, setCpu] = useState("");
    const [ssd, setSSD] = useState(0);
    const [hdd, setHdd] = useState(0);
    const [hybrid, setHybrid] = useState(0);
    const [flashMemory, setFlashMemory] = useState(0);
    const [gpu, setGpu] = useState("");
    const [opSys, setOpSys] = useState("");
    const [clockRate, setClockRate] = useState(0);
    const [touchscreen, setTouchscreen] = useState("Yes");
    const [resolution, setResolution] = useState("");
    const [weight, setWeight] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
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
        console.log(formData); // make api call to backend
        getResult(formData);
    };

    const getResult = (data) => {
            
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
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="border p-2 w-full" />
                </div>

                <div>
                    <label className="block font-bold mb-1">Type</label>
                    <input type="text" value={typename} onChange={(e) => setTypename(e.target.value)} className="border p-2 w-full" />
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
                        <input type="text" value={gpu} onChange={(e) => setGpu(e.target.value)} className="border p-2 w-full" />
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
                        <select onChange={(e) => setTouchscreen((e.target.value == 'Yes' ? 1 : 0))} className="border p-2 w-full">
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
                        <input type="text" value={cpu} onChange={(e) => setCpu(e.target.value)} className="border p-2 w-full" />
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
            </form>
        </div>
    );
}

export default LaptopForm;

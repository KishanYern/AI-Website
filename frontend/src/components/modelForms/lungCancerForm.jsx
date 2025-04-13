import React, { useState } from 'react';
import Tooltip from './tooltip';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2';

function LungCancerForm() {
  // Form fields state
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(50);
  const [smoking, setSmoking] = useState("No");
  const [yellowFingers, setYellowFingers] = useState("No");
  const [anxiety, setAnxiety] = useState("No");
  const [peerPressure, setPeerPressure] = useState("No");
  const [chronicDisease, setChronicDisease] = useState("No");
  const [fatigue, setFatigue] = useState("No");
  const [allergy, setAllergy] = useState("No");
  const [wheezing, setWheezing] = useState("No");
  const [alcoholConsumption, setAlcoholConsumption] = useState("No");
  const [excessiveCoughing, setExcessiveCoughing] = useState("No");
  const [shortnessOfBreath, setShortnessOfBreath] = useState("No");
  const [swallowingDifficulty, setSwallowingDifficulty] = useState("No");
  const [chestPain, setChestPain] = useState("No");

  // Error and output state
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [output, setOutput] = useState();

  const resetForm = () => {
    setGender("Male");
    setAge(50);
    setSmoking("No");
    setYellowFingers("No");
    setAnxiety("No");
    setPeerPressure("No");
    setChronicDisease("No");
    setFatigue("No");
    setAllergy("No");
    setWheezing("No");
    setAlcoholConsumption("No");
    setExcessiveCoughing("No");
    setShortnessOfBreath("No");
    setSwallowingDifficulty("No");
    setChestPain("No");
    setError(false);
    setErrorText('');
    setOutput();
  };

  const validateForm = () => {
    if (age < 0) {
      setError(true);
      setErrorText('Please ensure that age is greater than or equal to zero.');
      return false;
    }
    // Ensuring gender is valid if somehow altered manually.
    if (gender !== "Male" && gender !== "Female") {
      setError(true);
      setErrorText("Please select a valid gender.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = {
      Gender: gender,
      Age: age,
      Smoking: smoking,
      YellowFingers: yellowFingers,
      Anxiety: anxiety,
      PeerPressure: peerPressure,
      ChronicDisease: chronicDisease,
      Fatigue: fatigue,
      Allergy: allergy,
      Wheezing: wheezing,
      AlcoholConsumption: alcoholConsumption,
      ExcessiveCoughing: excessiveCoughing,
      ShortnessOfBreath: shortnessOfBreath,
      SwallowingDifficulty: swallowingDifficulty,
      ChestPain: chestPain,
    };

    getResult(formData);
  };

  const getResult = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/LungCancer-Model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setOutput(result.prediction);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorText("Problem fetching the result");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-md mt-10 relative font-semibold">
      <Tooltip
        message={{
          title: 'Before You Start',
          text: 'Please note that this lung cancer prediction model should not replace any professional medical advice. The predictions generated are based on AI learning and may not be 100% accurate. Always consult a qualified professional for proper evaluation.',
        }}
      >
        <HiOutlineQuestionMarkCircle className="absolute top-2 right-8" size={30} />
      </Tooltip>
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        Lung Cancer Risk Predictor
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 text-xl font-semibold text-gray-700">
          General Information
        </div>
        {/* Gender Selection */}
        <div className="md:col-span-2">
          <label className="block font-medium text-gray-700 mb-2">Gender</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={() => setGender("Male")}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={() => setGender("Female")}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        {/* Age Input */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Age</label>
          <input
            type="number"
            required
            name="age"
            min="0"
            step="1"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Smoking */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Smoking</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="smoking"
                value="Yes"
                checked={smoking === "Yes"}
                onChange={() => setSmoking("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="smoking"
                value="No"
                checked={smoking === "No"}
                onChange={() => setSmoking("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Yellow Fingers */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Yellow Fingers</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="yellowFingers"
                value="Yes"
                checked={yellowFingers === "Yes"}
                onChange={() => setYellowFingers("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="yellowFingers"
                value="No"
                checked={yellowFingers === "No"}
                onChange={() => setYellowFingers("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Anxiety */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Anxiety</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="anxiety"
                value="Yes"
                checked={anxiety === "Yes"}
                onChange={() => setAnxiety("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="anxiety"
                value="No"
                checked={anxiety === "No"}
                onChange={() => setAnxiety("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Peer Pressure */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Peer Pressure</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peerPressure"
                value="Yes"
                checked={peerPressure === "Yes"}
                onChange={() => setPeerPressure("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peerPressure"
                value="No"
                checked={peerPressure === "No"}
                onChange={() => setPeerPressure("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Chronic Disease */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Chronic Disease</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="chronicDisease"
                value="Yes"
                checked={chronicDisease === "Yes"}
                onChange={() => setChronicDisease("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="chronicDisease"
                value="No"
                checked={chronicDisease === "No"}
                onChange={() => setChronicDisease("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Fatigue */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Fatigue</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="fatigue"
                value="Yes"
                checked={fatigue === "Yes"}
                onChange={() => setFatigue("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="fatigue"
                value="No"
                checked={fatigue === "No"}
                onChange={() => setFatigue("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Allergy */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Allergy</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="allergy"
                value="Yes"
                checked={allergy === "Yes"}
                onChange={() => setAllergy("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="allergy"
                value="No"
                checked={allergy === "No"}
                onChange={() => setAllergy("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Wheezing */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Wheezing</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="wheezing"
                value="Yes"
                checked={wheezing === "Yes"}
                onChange={() => setWheezing("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="wheezing"
                value="No"
                checked={wheezing === "No"}
                onChange={() => setWheezing("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Alcohol Consumption */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Alcohol Consumption</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="alcoholConsumption"
                value="Yes"
                checked={alcoholConsumption === "Yes"}
                onChange={() => setAlcoholConsumption("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="alcoholConsumption"
                value="No"
                checked={alcoholConsumption === "No"}
                onChange={() => setAlcoholConsumption("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Excessive Coughing */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Excessive Coughing</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="excessiveCoughing"
                value="Yes"
                checked={excessiveCoughing === "Yes"}
                onChange={() => setExcessiveCoughing("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="excessiveCoughing"
                value="No"
                checked={excessiveCoughing === "No"}
                onChange={() => setExcessiveCoughing("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Shortness of Breath */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Shortness of Breath</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="shortnessOfBreath"
                value="Yes"
                checked={shortnessOfBreath === "Yes"}
                onChange={() => setShortnessOfBreath("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="shortnessOfBreath"
                value="No"
                checked={shortnessOfBreath === "No"}
                onChange={() => setShortnessOfBreath("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Swallowing Difficulty */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Swallowing Difficulty</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="swallowingDifficulty"
                value="Yes"
                checked={swallowingDifficulty === "Yes"}
                onChange={() => setSwallowingDifficulty("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="swallowingDifficulty"
                value="No"
                checked={swallowingDifficulty === "No"}
                onChange={() => setSwallowingDifficulty("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {/* Chest Pain */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Chest Pain</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="chestPain"
                value="Yes"
                checked={chestPain === "Yes"}
                onChange={() => setChestPain("Yes")}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="chestPain"
                value="No"
                checked={chestPain === "No"}
                onChange={() => setChestPain("No")}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Predict Risk
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="w-full mt-5 bg-gray-600 text-white font-semibold p-3 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Reset
          </button>
        </div>
        {error && (
          <div className="md:col-span-2 text-red-600 text-center">
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
            <div className="text-white text-sm ml-2">Lung Cancer Risk Predictor 🤖</div>
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
              <span>✅ Accuracy: 96.53%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LungCancerForm;

import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from './pages/home'
import AboutUs from './pages/aboutUs';
import Diabeties from './pages/diabeties';
import MedicalExpense from './pages/medicalExpense';
import Laptop from './pages/laptop';
import LungCancer from './pages/lungCancer';
import NotFound from './pages/notFound';
import Sidebar from './components/Sidebar';
import Sources from "./pages/sources";

function App() {
    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/models/Laptop' element={<Laptop />} />
                <Route path='/models/Diabeties' element={<Diabeties />} />
                <Route path='/models/Medical-Expense' element={<MedicalExpense />} />
                <Route path='/models/Lung' element={<LungCancer />} />
                <Route path='/sources' element={<Sources />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

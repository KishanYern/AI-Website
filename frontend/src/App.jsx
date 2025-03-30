import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from './pages/home'
import AboutUs from './pages/aboutUs';
import Diabeties from './pages/diabeties';
import Embolism from './pages/embolism';
import Laptop from './pages/laptop';
import Lung from './pages/lung';
import NotFound from './pages/notFound';
import Sidebar from './components/Sidebar';

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
                <Route path='/models/Embolism' element={<Embolism />} />
                <Route path='/models/Lung' element={<Lung />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

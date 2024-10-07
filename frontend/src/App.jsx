import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Diabeties from './pages/diabeties';
import Embolism from './pages/embolism';
import Laptop from './pages/laptop';
import Lung from './pages/lung';
import Medical from './pages/medical'
import NotFound from './pages/notFound';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Laptop' element={<Laptop />} />
                <Route path='/Diabeties' element={<Diabeties />} />
                <Route path='/Embolism' element={<Embolism />} />
                <Route path='/Lung' element={<Lung />} />
                <Route path='/Medical' element={<Medical />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

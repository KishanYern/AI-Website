import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Diabeties from './components/models/diabeties';
import Embolism from './components/models/embolism';
import Laptop from './components/models/laptop';
import Lung from './components/models/lung';
import Medical from './components/models/medical'
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

import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Laptop from './pages/laptopPage';
import NotFound from './pages/notFound';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Laptop' element={<Laptop />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Laptop from './pages/laptopPage';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Laptop' element={<Laptop />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    );
}

export default App;

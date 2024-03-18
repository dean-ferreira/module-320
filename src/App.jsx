import './App.css';

// Import pages
import Main from './pages/Main';
import AllStates from './pages/AllStates';
import NavBar from './components/NavBar';

// Import react router dom tools
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/states" element={<AllStates />} />
            </Routes>
        </>
    );
}

export default App;

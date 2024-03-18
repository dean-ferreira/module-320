import './App.css';

// Import pages
import Main from './pages/Main';
import AllStates from './pages/AllStates';
import NavBar from './components/NavBar';

// Import react router dom tools
import { Route, Routes } from 'react-router-dom';

// Import State data
import { StatePriceProvider } from './contexts/StatePriceContext';

function App() {
    return (
        <StatePriceProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/states" element={<AllStates />} />
            </Routes>
        </StatePriceProvider>
    );
}

export default App;

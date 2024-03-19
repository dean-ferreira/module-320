import { useContext } from 'react';

// Import contexts
import { StatePriceContext } from '../contexts/StatePriceContext';

// Import components
import StateTile from '../components/StateTile';

function AllStates() {
    const { statePrices } = useContext(StatePriceContext);

    const loaded = () => {
        return (
            <div className="container content">
                <h2 className="content-title">All States</h2>
                <StateTile statePrices={statePrices} />
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return statePrices ? loaded() : loading();
}

export default AllStates;

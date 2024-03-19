import { useContext } from 'react';

// Import contexts
import { StatePriceContext } from '../contexts/StatePriceContext';

// Import components
import StateTile from '../components/StateTile';

function calculateAveragePrice(state) {
    let total =
        parseFloat(state.gasoline) +
        parseFloat(state.midGrade) +
        parseFloat(state.premium) +
        parseFloat(state.diesel);
    return total / 4;
}

function findThreeCheapestStates(statesPrices) {
    let averages = statesPrices.map((state) => {
        return {
            gasoline: state.gasoline,
            midGrade: state.midGrade,
            premium: state.premium,
            diesel: state.diesel,
            name: state.name,
            average: calculateAveragePrice(state),
        };
    });

    averages.sort((a, b) => a.average - b.average);

    return averages.slice(0, 3);
}

function Main() {
    const { statePrices } = useContext(StatePriceContext);
    const loaded = () => {
        const cheapestStates = findThreeCheapestStates(statePrices);
        return (
            <div className="container content">
                <h2 className="content-title">
                    Top 3 States with the Cheapest Gas Prices
                </h2>
                <StateTile statePrices={cheapestStates} />
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return statePrices ? loaded() : loading();
}

export default Main;

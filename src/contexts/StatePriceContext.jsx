import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StatePriceContext = createContext();

function calculateAveragePrice(state) {
    let total =
        parseFloat(state.gasoline) +
        parseFloat(state.midGrade) +
        parseFloat(state.premium) +
        parseFloat(state.diesel);
    return total / 4;
}

function getAveragePrices(states) {
    return states.map((state) => {
        return {
            gasoline: state.gasoline,
            midGrade: state.midGrade,
            premium: state.premium,
            diesel: state.diesel,
            name: state.name,
            average: calculateAveragePrice(state),
        };
    });
}

const StatePriceProvider = ({ children }) => {
    const [statePrices, setStatePrices] = useState(0);
    let apiKey = import.meta.env.VITE_API_KEY;
    const options = {
        method: 'GET',
        url: 'https://api.collectapi.com/gasPrice/allUsaPrice',
        headers: {
            'content-type': 'application/json',
            authorization: `apikey ${apiKey}`,
        },
    };

    async function getPrices() {
        try {
            const response = await axios(options);
            setStatePrices(getAveragePrices(response.data.result));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getPrices();
    }, []);

    return (
        <StatePriceContext.Provider value={{ statePrices }}>
            {children}
        </StatePriceContext.Provider>
    );
};

export { StatePriceProvider, StatePriceContext };

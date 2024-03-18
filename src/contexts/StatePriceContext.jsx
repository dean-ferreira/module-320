import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StatePriceContext = createContext();

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
            setStatePrices(response.data.result);
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

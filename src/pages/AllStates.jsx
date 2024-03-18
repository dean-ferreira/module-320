import { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
    const [states, setStates] = useState([]);
    let apiKey = import.meta.env.VITE_API_KEY;
    const options = {
        method: 'GET',
        url: 'https://api.collectapi.com/gasPrice/allUsaPrice',
        headers: {
            'content-type': 'application/json',
            authorization: `apikey ${apiKey}`,
        },
    };

    async function getStates() {
        try {
            const response = await axios(options);
            setStates(response.data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getStates();
    }, []);

    const loaded = () => {
        return (
            <div>
                All States
                {states.map((state, index) => (
                    <div key={index}>
                        <h2>{state.name}</h2>
                        <h3>{state.gasoline}</h3>
                        <h3>{state.midGrade}</h3>
                        <h3>{state.premium}</h3>
                        <h3>{state.diesel}</h3>
                    </div>
                ))}
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return states ? loaded() : loading();
}

export default Main;

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
                    <div key={index} className="state-tile">
                        <h2 className="state-name">{state.name}</h2>
                        <div className="fuel-selection">
                            <div className="fuel-option">
                                <h3 className="grade-name">Regular</h3>
                                <div className="price grade-price">
                                    {state.gasoline}
                                </div>
                                <button class="grade-button">87</button>
                            </div>
                            <div className="fuel-option">
                                <h3 className="grade-name">Mid-Grade</h3>
                                <div className="price grade-price">
                                    {state.midGrade}
                                </div>
                                <button class="grade-button">89</button>
                            </div>
                            <div className="fuel-option">
                                <h3 className="grade-name">Premium</h3>
                                <div className="price grade-price">
                                    {state.premium}
                                </div>
                                <button class="grade-button">91</button>
                            </div>
                            <div className="fuel-option">
                                <h3 className="grade-name">Diesel</h3>
                                <div className="price grade-price">
                                    {state.diesel}
                                </div>
                                <button class="grade-button">Diesel</button>
                            </div>
                        </div>
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

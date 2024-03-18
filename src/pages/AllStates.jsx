import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { StatePriceContext } from '../contexts/StatePriceContext';

function Main() {
    const { statePrices } = useContext(StatePriceContext);

    const loaded = () => {
        return (
            <div className="container content">
                <h2 className="content-title">All States</h2>
                {statePrices.map((state, index) => (
                    <div key={index} className="state-tile">
                        <h2 className="state-name">{state.name}</h2>
                        <div className="fuel-selection">
                            <div className="fuel-option">
                                <h3 className="grade-name">Regular</h3>
                                <div className="price grade-price">
                                    {state.gasoline}
                                </div>
                                <button className="grade-button">87</button>
                            </div>
                            <div className="fuel-option">
                                <h3 className="grade-name">Mid-Grade</h3>
                                <div className="price grade-price">
                                    {state.midGrade}
                                </div>
                                <button className="grade-button">89</button>
                            </div>
                            <div className="fuel-option">
                                <h3 className="grade-name">Premium</h3>
                                <div className="price grade-price">
                                    {state.premium}
                                </div>
                                <button className="grade-button">91</button>
                            </div>
                            <div className="fuel-option">
                                <h3 className="grade-name">Diesel</h3>
                                <div className="price grade-price">
                                    {state.diesel}
                                </div>
                                <button className="grade-button">Diesel</button>
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

    return statePrices ? loaded() : loading();
}

export default Main;

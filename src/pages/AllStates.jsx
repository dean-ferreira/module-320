import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { StatePriceContext } from '../contexts/StatePriceContext';

import StateTile from '../components/StateTile';

function Main() {
    const { statePrices } = useContext(StatePriceContext);

    const loaded = () => {
        return (
            <div className="container content">
                <StateTile statePrices={statePrices} />
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return statePrices ? loaded() : loading();
}

export default Main;

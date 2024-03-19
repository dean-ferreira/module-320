import '../App.css';

import { useState } from 'react';

function StateTile(props) {
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    // Sort states by name or average price
    const sortedStates = props.statePrices.sort((a, b) => {
        if (sortOrder === 'a-z') {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === 'z-a') {
            return b.name.localeCompare(a.name);
        } else if (sortOrder === 'asc') {
            return a.average - b.average;
        } else if (sortOrder === 'desc') {
            return b.average - a.average;
        }
    });

    return (
        <div className="container content">
            <form className="sort-form">
                <label htmlFor="sortOrder">Sort by:</label>
                <select
                    id="sortOrder"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="asc">Low - High</option>
                    <option value="desc">High - Low</option>
                </select>
            </form>
            {sortedStates.map((state, index) => (
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
}

export default StateTile;

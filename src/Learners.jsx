import React from 'react';

export default function Learners({ learners }) {
    return (
        <div>
            <h1>Learners</h1>
            <ul>
                {learners.map((learner, index) => (
                    <li key={index}>
                        <h2>{learner.name}</h2>
                        <p>{learner.bio}</p>
                        <h3>Scores</h3>
                        <ul>
                            {learner.scores.map((score, index) => (
                                <li key={index}>
                                    <p>Date: {score.date}</p>
                                    <p>Score: {score.score}</p>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

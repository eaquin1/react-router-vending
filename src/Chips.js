import React, { useState } from "react";

const Chips = () => {
    const [chips, setChips] = useState(0);

    const increase = () => {
        setChips((c) => c + 1);
    };
    return (
        <div>
            <h1>Delicious!</h1>
            <img
                src="https://media.giphy.com/media/1m40pJP4vy4q4/giphy.gif"
                alt="Eating chips"
            />

            <h2>Bags of Chips Eaten</h2>
            <p>{chips}</p>
            <button onClick={increase}>Nom Nom</button>
        </div>
    );
};

export default Chips;

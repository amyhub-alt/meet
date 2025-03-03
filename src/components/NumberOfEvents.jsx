import React, {useEffect, useState} from "react";


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const [number, setNumber] = useState(32)

    const handleInputChange = (event) => {
        // setCurrentNOE(event.target.value);
        const value =event.target.value;
        setNumber(value);

        if (isNaN(value) || value <= 0 || value > 100) {
            setErrorAlert("Please enter a valid number of events (between 1 and 100).");
            // Set a fallback value only if the input is invalid
            // setCurrentNOE(32);  // or use whatever default fallback you prefer
        } else {
            setErrorAlert(""); // Clear the error
            setCurrentNOE(value); // Update the number of events only when valid
        }
    };

    return(
        <div id="number-of-events">
            <label htmlFor="event-count"> Number of Events:</label>
            <input
                type="text" 
                role="textbox" 
                id="event-count" 
                value={number}
                onChange={handleInputChange} 
            />
        </div>
    );
};

export default NumberOfEvents;




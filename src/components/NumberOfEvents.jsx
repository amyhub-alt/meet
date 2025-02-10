import React, {useState} from "react";


const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {

    // const [eventCount, setEventCount] = useState(32);

    const handleInputChange = (event) => {
        setCurrentNOE(event.target.value);
    };

    return(
        <div id="number-of-events">
            <label htmlFor="event-count"> Number of Events:</label>
            <input
                type="number" 
                role="textbox" 
                id="event-count" 
                value={currentNOE}
                onChange={handleInputChange} 
            />
        </div>
    );
};

export default NumberOfEvents;




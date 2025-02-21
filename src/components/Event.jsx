import React from 'react';
import { useState } from 'react';


const Event = ({event}) => {
  const [show, setShow] = useState(false);
  return (
    <li className='event'>
    <p>{event.summary}</p>
    <p>{event.location}</p>
    <p>{event.start.dateTime}</p>
    <p>{event.end.dateTime}</p>
    <button className='details' onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>
    {show && <p className="event-description">{event.description}</p>}

 </li>
  );
}


export default Event;


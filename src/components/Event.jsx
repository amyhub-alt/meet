import React from 'react';


const Event = ({event}) => {
  // const 
  return (
    <li className='event'>
    <p>{event.summary}</p>
    <p>{event.location}</p>
    <p>{event.start.dateTime}</p>
    <p>{event.end.dateTime}</p>
    <button>show details</button>
    </li>
  );
}


export default Event;
import React from 'react';


const Event = ({event}) => {
  return (
    <li className='event'>
    <p>{event.summary}</p>
    <p>{event.location}</p>
    <p>{event.start.dateTime}</p>
    <p>{event.end.dateTime}</p>
    </li>
  );
}


export default Event;
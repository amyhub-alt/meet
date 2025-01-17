import React from 'react';


const Event = ({event}) => {
  return (
    <li className='event'>
    <p>{event.summary}
    </p>
    </li>
  );
}


export default Event;
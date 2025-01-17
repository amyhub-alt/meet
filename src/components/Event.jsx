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
    <button onClick={()=>setShow(true)}>{show == false ? "show details" : "hide details"}</button>
    {
      show ? <p className='details'>{event.description}</p> : <></>
    }
 </li>
  );
}


export default Event;
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
    <button onClick={()=>{
      console.log(show)
      setShow(true)}
      }>
      {show ? "hide details" : "show details"}
      </button>
    <p className='details'>{ show ? event.description : null}</p> 
 </li>
  );
}


export default Event;
import React, { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch'
import NumberOfEvents from './components/NumberOfEvents'
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';


import './App.css';

const App = () => {

  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");


  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert("No network connection found. This app now uses data from previous sessions.")
    }
    fetchData();
  }, [currentCity, currentNOE]);


  const fetchData = async () => {
    try {
      const allEvents = await getEvents();
      const filteredEvents = currentCity === "See all cities" 
      ? allEvents 
      : allEvents.filter(event => event.location === currentCity)
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    } catch (error) {
      setErrorAlert("There was an error fetching the events. Please try again later.");
    }
  };



  return (
    <div className="App">
      <div className="alerts-container">
        { infoAlert && infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert && errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert && warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
        </div>
        <CitySearch 
          allLocations={allLocations} 
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert} />
        <NumberOfEvents 
          setCurrentNOE={setCurrentNOE} 
          setErrorAlert={setErrorAlert}/>
        <EventList events ={events} />
    </div>
  );
};


export default App;
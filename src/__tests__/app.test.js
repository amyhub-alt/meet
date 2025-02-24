import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';
import mockData from '../mock-data';



describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })


  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
 
 
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
 
 
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);
 
 
    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');  
 
 
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
 
 
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
  });


  test('renders the number of events specifies by the user', async () =>{
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    // find the NumberOfEvents input
    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const NumberOfEventsInput = within(NumberOfEventsDOM).getByRole('textbox');

    // change number of events to 10
    await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

    //wait for events to update
    await waitFor(() => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
      expect(allRenderedEventItems.length).toBe(10);

    });
  });
});
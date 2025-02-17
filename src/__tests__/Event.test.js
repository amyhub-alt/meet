import React from 'react';
import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
 let EventComponent;
 beforeEach(() => {
   EventComponent = render(<Event event={mockData[0]} />);
 })

 test('has  summary', () => {
   expect(EventComponent.queryByText( mockData[0].summary)).toBeInTheDocument();
 });

  test('has  location', () => {
    expect(EventComponent.queryByText( mockData[0].location)).toBeInTheDocument();
  });

  test('has start time', () => {
    expect(EventComponent.queryByText( mockData[0].start.dateTime)).toBeInTheDocument();
  });
 

  test('has end time', () => {
    expect(EventComponent.queryByText( mockData[0].end.dateTime)).toBeInTheDocument();
  });

  test('renders event details button with the title (Show Details)', () => {
    expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
  });


  test('renders button with (Hide Details)', async() => {
    const user = userEvent.setup();
    const button = EventComponent.getByText('Show Details');
    await user.click(button);
    
    expect(await EventComponent.findByText('Hide Details')).toBeInTheDocument();
  });




});
import React from 'react';
import { render } from '@testing-library/react';
import Event from '../components/Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
 let EventComponent;
 let allEvents;
 beforeEach(async () => {
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

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });


});
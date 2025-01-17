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

 test('has an summary', () => {
   expect(EventComponent.queryByText( mockData[0].summary)).toBeInTheDocument();
 });


});
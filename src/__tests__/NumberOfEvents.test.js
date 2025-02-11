import React from 'react';  // Add this line
import { render, screen } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';


// test('renders a textbox element in NumberOfEvents', () => {
//     render(<NumberOfEvents setCurrentNOE={()=>{}} />);
//     const textbox = screen.getByRole('textbox');
//     expect (textbox.value).toBe('32');
// });

test('check that NumberOfEvent exist', async () =>{
    render(<NumberOfEvents setCurrentNOE={()=>{}} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox.value).toBe("");
});

test('updates the value of the textbox when user types in it', async () =>{
    render(<NumberOfEvents setCurrentNOE={()=>{}} />);
    const textbox = screen.getByRole('textbox');
    await userEvent.type(textbox, '{backspace}{backspace}10');
    expect (textbox.value).toBe('10');
});


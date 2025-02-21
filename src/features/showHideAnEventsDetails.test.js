import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has opened the Meet app', () => {

        });

        when('the list of events is displayed', () => {

        });

        then('the event details should be hidden by default', () => {

        });
    });
    
    test('User can expand an event to see details', ({ given, when, then }) => {
        given('the user sees a list of events', () => {

        });

        when('the user clicks on an event’s “Show Details” button', () => {

        });

        then('the event details should be displayed', () => {

        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        given('the event details are displayed', () => {

        });

        when('the user clicks on the event’s “Hide Details” button', () => {

        });

        then('the event details should be hidden again', () => {

        });
    });


});
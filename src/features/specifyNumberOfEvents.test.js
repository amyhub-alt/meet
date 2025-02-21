import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        given('I am on the events page', () => {

        });

        when('I have not specified the number of events', () => {

        });

        then(/^I should see (\d+) events displayed by default$/, (arg0) => {

        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        given('I am on the events page', () => {

        });

        when(/^I specify the number of events to display as (.*)$/, (arg0) => {

        });

        then(/^I should see (.*) events displayed$/, (arg0) => {

        });
    });
});
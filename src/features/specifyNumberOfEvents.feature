Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given I am on the events page
    When I have not specified the number of events
    Then I should see 32 events displayed by default

  Scenario: User can change the number of events displayed
    Given I am on the events page
    When I specify the number of events to display as "<number>"
    Then I should see "<number>" events displayed
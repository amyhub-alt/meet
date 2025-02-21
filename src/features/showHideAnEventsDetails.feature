Feature: Show/Hide Event Details  

  Scenario: An event element is collapsed by default  
    Given the user has opened the Meet app  
    When the list of events is displayed  
    Then the event details should be hidden by default  

  Scenario: User can expand an event to see details  
    Given the user sees a list of events  
    When the user clicks on an event’s “Show Details” button  
    Then the event details should be displayed  

  Scenario: User can collapse an event to hide details  
    Given the event details are displayed  
    When the user clicks on the event’s “Hide Details” button  
    Then the event details should be hidden again 
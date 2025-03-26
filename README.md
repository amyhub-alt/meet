# React + Vite
# Event Finder App

This project is a web application that helps users find and explore events in various cities. The app provides features such as filtering events by city, viewing event details, and accessing the app offline. Users can also add the app as a shortcut to their home screen for quick access and visualize event details through interactive charts.

##  Overview

Meet is a progressive web app (PWA) built with **React** and **Vite** that allows users to discover upcoming events in various cities. The app fetches event data using the Google Calendar API and visualizes the data using charts. It works both online and offline, providing a native-like user experience across devices.

##  Technologies Used

- React + Vite
- Google Calendar API
- Recharts (or Chart.js, depending on what you used)
- Jest + Cucumber (for testing)
- Service Workers + Workbox (for offline support/PWA functionality)

##  Testing

- Unit and integration tests written using **Jest**
- End-to-end feature testing using **Cucumber** and **Gherkin syntax**

##  PWA Features

- Offline functionality with cached events
- "Add to Home Screen" prompt
- Responsive design for mobile & desktop
- Fast performance thanks to Vite + lazy loading

## Key Features
1. Filter Events by City
2. Show/Hide Event Details
3. Specify Number of Events
4. Use the App When Offline
5. Add an App Shortcut to the Home Screen
6. Display Charts Visualizing Event Details

## User Stories

### Feature 1: Filter Events by City (CitySearch)
- **As a user**, I should be able to filter events by city
- **So that**, I can see the list of events that take place in that city.

### Feature 2: Show/Hide Event Details (Event)
- **As a user**, I should be able to click to show or hide event details
- **So that**, I can see more or less information about an event.

### Feature 3: Specify Number of Events (NumberOfEvent)
- **As a user**, I should be able to specify the number of events I want to view
- **So that**, I can control how many events are displayed in the event list at once.

### Feature 4: Use the App When Offline (App)
- **As a user**, I should be able to use the app when offline
- **So that**, I can view the events I accessed when I was last online.

### Feature 5: Add an App Shortcut to the Home Screen
- **As a user**, I should be able to add an app shortcut to my home screen
- **So that**, I can quickly access the app.

### Feature 6: Display Charts Visualizing Event Details (Charts)
- **As a user**, I should be able to see a chart showing upcoming events in each city
- **So that**, I can know what events are organized in which city.

## Scenarios in Gherkin Syntax

### Feature 1: Filter Events by City
```
Given I am on the main page of the app
When I select a city from the dropdown menu
Then I should see a list of events filtered by the selected city
```

### Feature 2: Show/Hide Event Details
```
Given I am viewing a list of events
When I click on the "Show Details" button of an event
Then I should see additional details about the event

Given I am viewing the details of an event
When I click on the "Hide Details" button
Then the additional details of the event should be hidden
```

### Feature 3: Specify Number of Events
```
Given I am on the main page of the app
When I select a number from the "Number of Events" dropdown
Then I should see the selected number of events displayed in the list
```

### Feature 4: Use the App When Offline
```
Given I have previously accessed events online
When I open the app without an internet connection
Then I should still see the events I last viewed
```

### Feature 5: Add an App Shortcut to the Home Screen
```
Given I am using the app on a supported device
When I select the "Add to Home Screen" option
Then the app should be added as a shortcut on my home screen
```

### Feature 6: Display Charts Visualizing Event Details
```
Given I have selected a city
When I view the chart section of the app
Then I should see a chart displaying the upcoming events in the selected city
```
##  Getting Started

1. Clone the repository:
git clone https://github.com/amyhub-alt/myFlix-client.git cd meet-app
 
2. Install dependencies:
npm install

3. Start the App:
npm run dev

4. Visit `http://localhost:5173` in your browser.
 
 ## 📇 Contact

Created by [Amy Tiefermann] 
```
'use strict';


const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
//  "https://meet-app-hhygig.netlify.app",
 "https://amyhub-alt.github.io/meet"
];


const oAuth2Client = new google.auth.OAuth2(
 CLIENT_ID,
 CLIENT_SECRET,
 redirect_uris[0]
);


module.exports.getAuthURL = async () => {
 /**
  *
  * Scopes array is passed to the `scope` option.
  *
  */
 const authUrl = oAuth2Client.generateAuthUrl({
   access_type: "offline",
   scope: SCOPES,
 });


 return {
   statusCode: 200,
   headers: {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Credentials': true,
   },
   body: JSON.stringify({
     authUrl,
   }),
 };
};

module.exports.getAccessToken = async (event) => {
    // Decode authorization code extracted from the URL query
    const code = decodeURIComponent(`${event.pathParameters.code}`);
   
   
    return new Promise((resolve, reject) => {
      /**
       *  Exchange authorization code for access token with a “callback” after the exchange,
       *  The callback in this case is an arrow function with the results as parameters: “error” and “response”
       */
   
   
      oAuth2Client.getToken(code, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response);
      });
    })
      .then((results) => {
        // Respond with OAuth token
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(results),
        };
      })
      .catch((error) => {
        // Handle error
        return {
          statusCode: 500,
          body: JSON.stringify(error),
        };
      });
   };

module.exports.getCalendarEvents = async (event) => {
    return new Promise((resolve, reject) => {
      try {
        // Extract the access token from the path parameters
        const accessToken = decodeURIComponent(event.pathParameters.access_token);
  
        if (!accessToken) {
          return reject({
            statusCode: 400,
            body: JSON.stringify({ error: "Access token is required" }),
          });
        }
  
        // Set the access token as credentials in oAuth2Client
        oAuth2Client.setCredentials({ access_token: accessToken });
  
        // Fetch calendar events
        calendar.events.list(
          {
            calendarId: process.env.CALENDAR_ID, // Use the calendar ID from environment variables
            auth: oAuth2Client,
            timeMin: new Date().toISOString(), // Start time for events (current date/time)
            singleEvents: true, // Expand recurring events into individual instances
            orderBy: "startTime", // Order events by start time
          },
          (error, response) => {
            if (error) {
              // Reject the promise with the error
              return reject({
                statusCode: 500,
                body: JSON.stringify({ error: "Failed to fetch calendar events", details: error }),
              });
            }
  
            // Resolve the promise with the list of events
            return resolve(response.data.items); // Return only the events
          }
        );
      } catch (error) {
        return reject({
          statusCode: 500,
          body: JSON.stringify({ error: error.message || "An unexpected error occurred" }),
        });
      }
    })
      .then((results) => {
        // Successfully fetched events
        return {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify({ events: results }), // Return the events in a formatted structure
        };
      })
      .catch((error) => {
        return {
          statusCode: error.statusCode || 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(error.body || { error: "Unknown error occurred" }),
        };
      });
  };
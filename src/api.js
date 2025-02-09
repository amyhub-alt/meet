import mockData from './mock-data';


/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};



/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }

  const token = await getAccessToken();

  if(token) {
    removeQuery();
    const url = "https://mapo0hrnl2.execute-api.us-east-2.amazonaws.com/dev/api/get-events" + "/" + token;
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      return result.events;
    } else return null;
  }
};

const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname)
  {
    newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck?.error) {
    await localStorage.removeItem("access_token"); // Kept await for consistency

    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");

    console.log("Authorization Code:", code);


    if (!code) {
      try {
        const response = await fetch(
          "https://mapo0hrnl2.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
        );
        const result = await response.json();
        const { authURL } = result;

        if (!authURL) {
          console.error("Auth URL is missing!!");
          return;
        }

        await (window.location.href = authURL);
      } catch (error) {
        console.error("Error fetching auth URL:", error);
      }
    } else {
      return await getToken(code);
    }
  }

  return accessToken;
};


const getToken = async (code) => {
  try {
    const encodedCode = encodeURIComponent(code);
    const url = `https://mapo0hrnl2.execute-api.us-east-2.amazonaws.com/dev/api/token/${encodedCode}`;
    
    console.log("Fetching token from:", url); 

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const { access_token } = await response.json();
    if (access_token) {
      localStorage.setItem("access_token", access_token);
    }
    return access_token;
  } catch (error) {
    console.error("Error fetching token:", error);
  }
};
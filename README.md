# Geolocation Finder Application

This full-stack application enables users to input an address in a React.js frontend. The Node.js backend handles
address validation, checks if the address's geolocation data is stored in the database, and if not, fetches it from a
third-party API. Additionally, it includes a feature to email the geolocation results from the frontend.
-----------

## Frontend Repository
This repository contains the frontend code for the Geolocation Finder application.

-----------

# Setup Instructions

- Clone the repository
    ```
    git clone  <git hub template url> <project_name>
    ```
- Switch to the repo folder
    ```
   cd <project_name>
  ```
- Install dependencies
  ### `npm install`
- Configure the Backend base url
  Copy the example env file and make the required configuration changes in the .env file
    ```
     cp .env.example .env
  ```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**TL;DR command list**

```
git clone https://github.com/RanaAlhuniess/GeoLocatorApplicationClient
cd GeoLocatorApplicationClient
npm install
cp .env.example .env
npm start
```

-----------
# Future Consideration:
## Display Map and Set Geolocation Data
One of the future considerations for this project involves implementing functionality to display a map and visualize geolocation data retrieved from the backend. This feature aims to enhance user experience by providing a visual representation of the geolocation data corresponding to the entered address.
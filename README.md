# Staybae-frontend

## Overview

This codebase is the client-side for the Staybae application. It is built using React with Typescript.

## Challenges during the assessment

Below are the challenges we should cover during our assessment following the two day bootcamp building a front-end application in StayBae. The assessment may cover our general understanding of the application as a whole, which that changes have been applied to the server-side to support the client-side.

- [X] Ensure that the favourites can be selected from the Top Picks as well be removed from the
      favourite list (similar to the Property Details page).

- [X] Add the ability to remove items from the favourites list.

- [X] On the footer, create a link or amend the footer to add an ‘About Us’ page. Create a new about
      us page and add content to it. You must ensure you can navigate to it as well once it’s clicked.

- [X] Enhance the search results to render a map. For this, you will be required to use Google Maps.
      This will also require you to obtain a personal access token from the Google Developers portal.

- [X] Add more properties to the application and add their longitude/latitude (to show more markers
      on the map).

Bonus:

- [X] Add places of interest on each property when you access the property details page. This can
      be achieved by using the longitude and latitude of the property and Google Maps for places of
      interest close to that.


## Requirements to run the app

Before you start the client-side application, you need to run the server-side. The instructions are on the ReadMe.

Then, to start the application, you need first to download the dependencies by running

```
npm install
```
Afterwards, you need to create an `.env` file on the root folder in which you will store your environment variables and API keys.

```
VITE_GOOGLE_MAPS_API_URL=https://maps.googleapis.com/maps/api/js
VITE_GOOGLE_MAPS_API_KEY=<your GOOGLE API key>
VITE_APP_API_URI=http://localhost:8080/api
VITE_GOOGLE_MAPS_API_PLACES_URL=https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json
```

### Starting the application

Now, on the root folder you can run

```
npm run dev
```

This will start the application on port `4000`. You can open the application on your browser on `localhost:4000`.

Then, only for development purposes, open the `https://cors-anywhere.herokuapp.com/corsdemo` on your browser and click on the `Request temporary access to the demo server` button. This will give you access to the GOOGLE MAPS PLACES API.

### Pages
The application is rendering on these pages

```
/home
/about-us
/search
/property/:id
/page-not-found
```

### Ready
Now, you are all set!

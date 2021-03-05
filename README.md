# Create React App

This project was bootstrapped with [Create React App].

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Library used`

This app is used axios library for fetching data from the API & Material UI for styling.

### `Code explanation`

In this app, I have used react hooks like useState(), useEffect().
Data is transfering from parent to child using props(betScreen.js to header.js) and even child to parent(header.js to betScreen.js) using callback function.
Created a state array to for data coming from API and iterate it using map function to display the Bet cards.
Pass the array data after filter which prevent duplicate betting to child component Header for displaying bet using props.
Once delete method is called removing the item from temp array and state array.

However this code doesn't handle button active state as i'm running short on time. But concept wise we need to create separate component for buttons.
So each button will have its own state. Which will prevent clicking on one button to active all buttons.


### Deployment

Deployment is done by using Heroku. here is the link to the app [https://betslipreact.herokuapp.com/]
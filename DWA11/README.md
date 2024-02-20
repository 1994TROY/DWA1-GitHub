# Tally App

A simple Tally counter application to demonstrate a Redux-inspired state management in JavaScript, organized with modern development practices. This app allows users to increment, decrement, and reset a counter, with state changes logged to the browser's console.

## Features

- **Increment**: Increase the counter value by one.
- **Decrement**: Decrease the counter value by one.
- **Reset**: Reset the counter value to zero.
- **State Logging**: All state changes are logged to the browser's console for real-time observation.

## Project Structure

- `actions.js`: Contains action creators for dispatching actions.
- `reducer.js`: Defines a reducer function to handle state transitions.
- `store.js`: Implements a Redux-like store with `getState`, `dispatch`, and `subscribe` methods.
- `main.js`: Entry point for the application logic that uses the store and actions.
- `index.html`: The main HTML file that loads the JavaScript modules and displays the app.

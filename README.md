# Application Documentation

## Overview

This application is a simple counter that allows users to increment, decrement, and reset a counter value within specified limits. It leverages the Shoelace framework for styling and inline CSS customization.

## Functionality

### 1. Adding Count

- Clicking the "Add" button increments the counter value by 1.
- The counter value cannot exceed 15. Once it reaches 15, the "Add" button is disabled, and its background color turns grey.
- If the counter is less than 15, the "Add" button remains active.

### 2. Subtracting Count

- Clicking the "Subtract" button decrements the counter value by 1.
- The counter value cannot go below -15. Once it reaches -15, the "Subtract" button is disabled, and its background color turns grey.
- If the counter is greater than -15, the "Subtract" button remains active.

### 3. Resetting Count

- Clicking the "Reset" button sets the counter value back to 0.
- If the "Add" button was disabled due to reaching the maximum count, it gets re-enabled upon resetting.

## Implementation Details

### HTML Structure

- The application consists of HTML elements such as buttons for adding, subtracting, and resetting the counter, along with a display area for the counter value.
- The Shoelace framework is used for styling the buttons and other elements of the application, providing a clean and modern UI.

### JavaScript Logic

- The JavaScript code uses selectors to access the necessary elements from the HTML document.
- Event listeners are added to the "Add," "Subtract," and "Reset" buttons to trigger the respective functions when clicked.
- The `addCounter()` function increments the counter value, disables the "Add" button when the counter reaches its maximum limit, and displays a message when the maximum count is reached.
- The `subtractCounter()` function decrements the counter value, disables the "Subtract" button when the counter reaches its minimum limit, and re-enables the "Add" button if necessary.
- The `resetCounter()` function resets the counter value to 0 and re-enables the "Add" button if necessary.

## Links

- [Shoelace Framework Documentation](https://shoelace.style/)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)


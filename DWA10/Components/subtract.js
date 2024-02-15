// Assuming handleButtonClick function is defined similarly as in add-button.js

// Decrement operation with a minimum count limit
function decrementCounter() {
    let displayElement = document.getElementById('counter-display');
    let subtractButton = document.getElementById("subtract-btn");
    let currentValue = parseInt(displayElement.textContent);

    if (currentValue > -15) {
        currentValue--;
        displayElement.textContent = currentValue;
    }

    if (currentValue === -15) {
        subtractButton.disabled = true; // Disable the subtract button once minimum is reached
    }
}

// Binding decrement operation to Subtract button
handleButtonClick("subtract-btn", decrementCounter);

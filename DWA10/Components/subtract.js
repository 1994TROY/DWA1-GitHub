// Assuming handleButtonClick function is defined and accessible

// Decrement operation with a minimum count limit
function decrementCounter() {
    let displayElement = document.getElementById('counter-display');
    let subtractButton = document.getElementById("subtract-btn");
    let currentValue = parseInt(displayElement.textContent);

    if (currentValue > -15) {
        currentValue--;
        displayElement.textContent = currentValue;
    }

    // Disable the subtract button and indicate maximum subtraction once -15 is reached
    if (currentValue <= -15) {
        subtractButton.disabled = true;
        // Optionally, change the button text or style to indicate it's disabled due to reaching the max subtraction
        subtractButton.textContent = "Max Subtracted";
        subtractButton.style.backgroundColor = "#ccc";
    }
}

// Binding decrement operation to Subtract button
document.addEventListener('DOMContentLoaded', () => {
    handleButtonClick("subtract-btn", decrementCounter);
});

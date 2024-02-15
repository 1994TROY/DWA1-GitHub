// Abstraction Coding for handling Add Button Clicking
function handleButtonClick(buttonId, operation) {
    document.getElementById(buttonId).addEventListener("click", operation);
}

function incrementCounter() {
    let displayElement = document.getElementById("counter-display");
    let currentValue = parseInt(displayElement.textContent);
    currentValue++;
    displayElement.textContent = currentValue; 
}


handleButtonClick("add-btn", incrementCounter);

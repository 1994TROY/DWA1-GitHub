// Abstraction for handling button click events
function handleButtonClick(buttonId, operation) {
    document.getElementById(buttonId).addEventListener("click", operation);
}

// Increment operation
function incrementCounter() {
    let currentValue = parseInt(document.getElementById("placeholder").value);
    currentValue++;
    document.getElementById("placeholder").value = currentValue;
}

// Binding increment operation to Add button
handleButtonClick("addButton", incrementCounter);

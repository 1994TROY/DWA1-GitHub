// Decrement operation
function decrementCounter() {
    let currentValue = parseInt(document.getElementById("placeholder").value);
    if (currentValue > 0) {
        currentValue--;
        document.getElementById("placeholder").value = currentValue;
    }
}

// Binding decrement operation to Subtract button
handleButtonClick("subtractButton", decrementCounter);

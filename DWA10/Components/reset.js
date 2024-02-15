// Reset operation
function resetCounter() {
    document.getElementById("placeholder").value = 0;
    alert("The counter has been reset.");
}

// Binding reset operation to Reset button
handleButtonClick("resetButton", resetCounter);

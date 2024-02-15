// Reset operation
function resetCounter() {
    document.getElementById("Counter").value = 0;
    alert("The counter has been reset.");
}

// Binding reset operation to Reset button
handleButtonClick("reset-btn", resetCounter);

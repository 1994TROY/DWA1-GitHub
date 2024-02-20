// Correct the selectors to use IDs
let add = document.querySelector("#add-btn");
let subtract = document.querySelector("#subtract-btn");
let reset = document.querySelector("#reset-btn");
let counter = document.querySelector("#counter-display"); // Use the correct ID here

// Add event listeners
add.addEventListener("click", addCounter);
subtract.addEventListener('click', subtractCounter);
reset.addEventListener('click', resetCounter);

function addCounter() {
    let counterNum = parseInt(counter.textContent); 
    if (counterNum < 15) {
        counter.textContent = counterNum + 1;
        add.style.backgroundColor = ""; 
        add.disabled = false; 

        // Check if the counter is greater than or equal to -15, enable the subtract button
        if (counterNum + 1 >= -15) {
            subtract.disabled = false;
            subtract.style.backgroundColor = "";
        }
    } else {
        add.style.backgroundColor = "grey"; 
        add.disabled = true;
        document.getElementById('max-count-dialog').show();
    }
}

function subtractCounter() {
    let counterNum = parseInt(counter.textContent);
    if (counterNum > -15) { // Checking if counterNum is greater than -15
        counter.textContent = counterNum - 1;
        subtract.style.backgroundColor = ""; 
        subtract.disabled = false; // Re-enable the subtract button
        
        // Check if the counter is less than or equal to -15
        if (counterNum - 1 <= -15) {
            subtract.style.backgroundColor = "grey"; // Disable the subtract button
            subtract.disabled = true;
            document.getElementById('min-count-dialog').show();
        }
        
        // Check if the counter is less than 15, enable the add button
        if (counterNum < 15) {
            add.disabled = false;
            add.style.backgroundColor = "";
        }
    }
}

function resetCounter() {
    counter.textContent = 0; // Reset the counter to 0
    // If you had disabled the add button upon reaching the max count, re-enable it here
    if (parseInt(counter.textContent) < 15) {
        add.disabled = false;
        add.style.backgroundColor = "";
    }
}

// scripts.js

// @ts-check

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  const dividendInt = parseInt(dividend, 10);                                                           // Change 1: Convert dividend and divider to integers using parseInt
  const dividerInt = parseInt(divider, 10);

  if (dividend === '' || divider === '') {                                                              // Change 4: Check if either or both inputs are empty
      result.innerText = 'Division not performed. Both values are required in inputs. Try again';
  } else if (!isNaN(dividendInt) && !isNaN(dividerInt) && dividerInt > 0) {                             // Change 2 & 5: Check for invalid inputs (non-numbers or division by zero or (Negative Value) )
      const divisionResult = Math.floor(dividendInt / dividerInt);                                      // Change 3: Use Math.floor to get the whole number result
      result.innerText = divisionResult;
  } else {
    if (isNaN(dividendInt) || isNaN(dividerInt)) {                                                      // Change 6: Check for critical error (non-numeric inputs)
        document.body.innerHTML = 'Something critical went wrong. Please reload the page';
        console.error('Critical error: Non-numeric input provided.', new Error().stack);
    } else {
        result.innerText = 'Division not performed. Invalid number provided. Try again';
        console.error('Invalid input. The divider should be a positive number.', new Error().stack);    // Change 5: Display error message and log the error in the console
    }
}
});
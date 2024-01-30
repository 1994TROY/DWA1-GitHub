// @ts-check

/**
 * @typedef {Object} Event
 * @property {string} date - The date of the event in YYYY-MM-DD format.
 * @property {string} event - The event description.
 */

/**
 * Add an event to the calendar.
 * @function
 * @returns {void}
 */
function addEvent() {
    /**
     * Prompt the user for event details.
     * @type {string}
     */
    const date = prompt("Enter date (YYYY-MM-DD):");
    
    /**
     * Prompt the user for event details.
     * @type {string}
     */
    const event = prompt("Enter event:");

    if (!date || !event) {
        alert("Please provide a valid date and event.");
        return;
    }

    if (!events[date]) {
        events[date] = [event];
    } else {
        events[date].push(event);
    }

    alert("Event added successfully!");
}

/**
 * List all events in the calendar.
 * @function
 * @returns {void}
 */
function listEvents() {
    /**
     * The list of events displayed in the UI.
     * @type {HTMLElement}
     */
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    for (const date in events) {
        events[date].forEach(event => {
            const listItem = document.createElement("li");
            listItem.textContent = `Date: ${date}, Event: ${event}`;
            eventList.appendChild(listItem);
        });
    }
}

// Add event listeners to buttons
document.getElementById("addEventButton").addEventListener("click", addEvent);
document.getElementById("listEventsButton").addEventListener("click", listEvents);

/**
 * @type {Object.<string, string[]>}
 */
const events = {};

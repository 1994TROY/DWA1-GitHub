/**
 * Action Types
 */
export const ADD = 'ADD';                 //Action for incrementing the counter
export const SUBTRACT = 'SUBTRACT';       // Action for decrementing the counter
export const RESET = 'RESET';             // Action for resetting the counter

/**
 * Action Creators
 */

/**
 * Create an action to add to the counter.
 * @returns {Object} Action object to add to the counter.
 */
export function add() {
  return { type: ADD };
}

/**
 * Create an action to subtract from the counter.
 * @returns {Object} Action object to subtract from the counter.
 */
export function subtract() {
  return { type: SUBTRACT };
}

/**
 * Create an action to reset the counter.
 * @returns {Object} Action object to reset the counter.
 */
export function reset() {
  return { type: RESET };
}

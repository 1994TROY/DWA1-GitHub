import { Tally } from "./stores.js";

/**
 * @typedef {object} AddNumber
 * @prop {'ADD_NUMBER'} type
 * @prop {Tally} tally
 */


/**
 * @typedef {object} SubtractNumber
 * @prop {'SUBTRACT_NUMBER'} type
 * @prop {Tally} tally
 */

/**
 * @typedef {object} ResetTally
 * @prop {'RESET_TALLY'} type
 * @prop {Tally} tally
 */

/**
 * @typedef {AddNumber | SubtractNumber} Action
 */
export const Action = {}


/**
 * @returns {AddNumber}
 */
export const addTally = () => {
   
    return { type: 'ADD_NUMBER' }
}

/**
 * @returns {SubtractNumber}
 */
export const subtractTally = () => {
   
    return { type: 'SUBTRACT_NUMBER' }
}

/**
 * @returns {ResetTally}
 */
export const resetTally = () => {
     
     return { type: 'RESET_TALLY' }
 }


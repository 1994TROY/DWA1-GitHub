import { reducer } from "./reducers.js"

/**
 * @typedef {object} Tally
 * @prop {number} add
 * @prop {number} subtract
 * @prop {number} reset
 */
export const Tally = {}

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action
 */

/**
 * @callback Subscription
 * @param {State} prev
 * @param {State} next
 */

/**
 * @param {Subscription} subscription
 * @returns {EmptyFn}
 */

/**
 * @typedef {object} State
 * @prop { Record<number, Tally> } tally
 */
export const State = {}

/**
 * @type {Array<Subscription>}
 */
let subscribers = []

/**
 * @type {Array<State>}
 */
export const state = [{
    tally: 0
}]


/**
 * @returns {State}
 */
export const getState = () => {
    return Object.freeze({...state[0]})
}

/**
 * @param {Subscription} subscription
 * @returns {EmptyFn}
 */
export const subscribe = (subscription) => {

    subscribers.push(subscription)
   
    const handler = (item) => item !== subscription
   
    return () => {
        let newSubscribers = subscribers.filter(handler);
        subscribers = newSubscribers;
      };
   }

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prev = getState()
    const next = reducer(prev, action)
   
    const handler = (item) => item(prev, next)
    subscribers.forEach(handler)
    
    state.unshift(next)
   }
   




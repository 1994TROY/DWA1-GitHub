import { counterReducer } from './reducer';

/**
 * Creates a Redux-like store to manage state.
 * @param {Function} reducer - A function that returns the next state tree, given the current state tree and the action to handle.
 * @returns {Object} A Redux-like store.
 */
function createStore(reducer) {
  let state;
  let listeners = [];

  /**
   * Get the current state.
   * @returns {Object} The current state.
   */
  const getState = () => state;

  /**
   * Dispatch an action to change the state.
   * @param {Object} action - The action to dispatch.
   */
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  /**
   * Subscribe to changes in the state.
   * @param {Function} listener - A callback to be invoked when the state changes.
   * @returns {Function} A function to unsubscribe the listener.
   */
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({}); // Initialize the state with the reducer's default

  return { getState, dispatch, subscribe };
}

// Creating the store
const store = createStore(counterReducer);

export default store;

import { ADD, SUBTRACT, RESET } from './actions';

/**
 * Counter reducer to handle state changes based on dispatched actions.
 * @param {Object} state - The current state of the counter.
 * @param {Object} action - The action dispatched.
 * @returns {Object} The updated state after applying the action.
 */
export function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    case SUBTRACT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

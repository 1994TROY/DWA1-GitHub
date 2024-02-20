import { Action } from "./actions.js"
import { State } from "./stores.js"

/**
 * @param {State} state
 * @param {Action} action 
 * @return {State}
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NUMBER': 
            return { tally: state.tally +1 }
              
        case 'SUBTRACT_NUMBER': 
            return { tally: state.tally -1 }
           
        case 'RESET_TALLY':
            return {  tally:  0}
            
        
        default:
        return state
    }}


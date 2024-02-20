import { addTally, subtractTally, resetTally } from "./actions.js";
import { getState, dispatch, subscribe } from "./stores.js";


subscribe((_, next) => console.log(next))

dispatch(getState()) // 0
dispatch(addTally()) // 1
dispatch(addTally()) // 2
dispatch(subtractTally()) // 1
dispatch(resetTally()) // 0



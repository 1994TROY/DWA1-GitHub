// scripts.js
import store from './store.js';
import { add, subtract, reset } from './actions.js';

store.subscribe(() => {                                 // Subscribe to the store to log the state changes
  console.log('State updated:', store.getState());
});

store.dispatch(add());                                  //call Actions
store.dispatch(add());
store.dispatch(subtract());
store.dispatch(reset());

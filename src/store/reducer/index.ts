import { combineReducers } from 'redux'
// import { phoneCheckReducer } from './phoneCheck.reducer';
import { registerReducer } from './register.reducer';

const reducer = combineReducers({
  // phoneCheck: phoneCheckReducer,
  register: registerReducer,
});

export { reducer };

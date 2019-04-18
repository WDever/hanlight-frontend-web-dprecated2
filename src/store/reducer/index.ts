import { combineReducers } from 'redux'
// import { phoneCheckReducer } from './phoneCheck.reducer';
import { registerReducer } from './register.reducer';
import { userReducer } from './user.reducer';

const reducer = combineReducers({
  // phoneCheck: phoneCheckReducer,
  register: registerReducer,
  user: userReducer,
});

export { reducer };

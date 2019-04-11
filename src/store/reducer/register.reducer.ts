import { produce } from 'immer';
import { registerReducerActions } from '../action';
import { RegisterModel } from '../model/register.model';

const initialState: RegisterModel = {
  registerStatus: 'none',
};

export const registerReducer = (state: RegisterModel = initialState, action: registerReducerActions) =>
  produce(state, draft => {
    switch(action.type) {
      case 'REGISTER':
        draft.registerStatus = 'pending';
        break;
      
      case 'REGISTER_SUCCESS':
        draft.registerStatus = 'success';
        break;

      case 'REGISTER_FAILURE':
        draft.registerStatus = 'failure';
        break;

      default:
        break;
    }
  });

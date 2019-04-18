// import { produce } from 'immer';
// import { phoneCheckReducerActions } from '../action';
// import { PhoneCheckModel } from '../model/phoneCheck.model';

// const initialState: PhoneCheckModel = {
//   signKey: '',
//   getStateStatus: 'none',
//   state: '',
//   code: '',
//   getCodeStatus: 'none',
//   verifyStatus: 'none',
// };

// export const phoneCheckReducer = (
//   state: PhoneCheckModel = initialState,
//   action: phoneCheckReducerActions,
// ) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case 'GET_STATE':
//         console.log(action.payload);
//         draft.signKey = action.payload;
//         draft.getStateStatus = 'pending';
//         break;

//       case 'GET_STATE_SUCCESS':
//         draft.state = action.payload.data.state;
//         draft.getStateStatus = 'success';
//         break;

//       case 'GET_STATE_FAILURE':
//         draft.getStateStatus = 'failure';
//         break;

//       case 'GET_CODE':
//         draft.code = action.payload.code;
//         draft.getCodeStatus = action.payload.status;
//         break;

//       case 'VERIFY_PHONE':
//         draft.verifyStatus = 'pending';
//         break;

//       case 'VERIFY_PHONE_SUCCESS':
//         draft.verifyStatus = 'success';
//         break;

//       case 'VERIFY_PHONE_FAILURE':
//         draft.verifyStatus = 'failure';
//         break;

//       default:
//         break;
//     }
//   });

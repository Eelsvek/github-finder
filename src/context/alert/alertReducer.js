import { SET_ALERT, REMOVE_ALERT } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case REMOVE_ALERT:
      return null;
    case SET_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        type: action.payload.type,
      };
    default:
      return;
  }
};

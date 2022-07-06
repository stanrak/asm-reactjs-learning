import * as ActionTypes from './ActionTypes';

export const Staffs = (state = {
  isLoading: true,
  errMess: null,
  staffs: []
}, action) => {
  switch (action.type) {
    case ActionTypes.STAFFS_FETCH_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs:[] };
    case ActionTypes.STAFFS_FETCH_SUCCESS:
      return { ...state, isLoading: false, errMess: null, staffs: action.payload };
    case ActionTypes.STAFFS_FETCH_ERROR:
      return { ...state, isLoading: false, errMess: action.payload };
    // case ActionTypes.STAFF_ADD:
    //   return { ...state, isLoading: false, errMess: null, staffs: action.payload };
    // case ActionTypes.STAFFS_LOADING:
    //   return { ...state, isLoading: true, errMess: null, staffs:[] };
    // case ActionTypes.STAFFS_FAILED:
    //   return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
}
import * as ActionTypes from './ActionTypes';

export const StaffsInDept = (state = {
  isLoading: false,
  errMess: null,
  staffsInDept: []
}, action) => {
  switch (action.type) {
    case ActionTypes.STAFFS_IN_DEPT_FETCH_LOADING:
      return { ...state, isLoading: true, errMess: null, staffsInDept:[] };
    case ActionTypes.STAFFS_IN_DEPT_FETCH_SUCCESS:
      return { ...state, isLoading: false, errMess: null, staffsInDept: action.payload };
    case ActionTypes.STAFFS_IN_DEPT_FETCH_ERROR:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
}
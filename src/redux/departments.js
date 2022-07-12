import * as ActionTypes from './ActionTypes';

export const Departments = (state = {
  isLoading: false,
  errMess: null,
  departments: []
}, action) => {
  switch (action.type) {
    case ActionTypes.DEPARTMENTS_FETCH_LOADING:
      return { ...state, isLoading: true, errMess: null, departments:[] };
    case ActionTypes.DEPARTMENTS_FETCH_SUCCESS:
      return { ...state, isLoading: false, errMess: null, departments: action.payload };
    case ActionTypes.DEPARTMENTS_FETCH_ERROR:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
}
import * as ActionTypes from './ActionTypes';

export const Salaries = (state = {
  isLoading: false,
  errMess: null,
  salaries: []
}, action) => {
  switch (action.type) {
    case ActionTypes.SALARIES_FETCH_LOADING:
      return { ...state, isLoading: true, errMess: null, salaries:[] };
    case ActionTypes.SALARIES_FETCH_SUCCESS:
      return { ...state, isLoading: false, errMess: null, salaries: action.payload };
    case ActionTypes.SALARIES_FETCH_ERROR:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
}
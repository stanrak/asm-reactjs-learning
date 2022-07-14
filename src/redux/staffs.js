import * as ActionTypes from './ActionTypes';

// fetch staffs from API
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
  }
}

// post staffs to API
export const AddStaffs = (state = {
  isLoading: true,
  errMess: null,
  addStaffs: []
}, action) => {
  switch (action.type) {
    case ActionTypes.STAFFS_POST_LOADING:
      return { ...state, isLoading: true, errMess: null, addStaffs: [] };
    case ActionTypes.STAFFS_POST_SUCCESS:
      return { ...state, isLoading: false, errMess: null, addStaffs: action.payload };
    case ActionTypes.STAFFS_POST_ERROR:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
}
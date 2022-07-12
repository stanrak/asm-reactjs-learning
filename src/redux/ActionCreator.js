import * as ActionTypes from './ActionTypes';

export const staffsFetchLoading = () => ({
  type: ActionTypes.STAFFS_FETCH_LOADING
});

export const staffsFetchSuccess = (staffs) => ({
  type: ActionTypes.STAFFS_FETCH_SUCCESS,
  payload: staffs
});

export const staffsFetchError = (err) => ({
  type: ActionTypes.STAFFS_FETCH_ERROR,
  payload: err
});

export const departmentsFetchLoading = () => ({
  type: ActionTypes.DEPARTMENTS_FETCH_LOADING
});

export const departmentsFetchSuccess = (staffs) => ({
  type: ActionTypes.DEPARTMENTS_FETCH_SUCCESS,
  payload: staffs
});

export const departmentsFetchError = (err) => ({
  type: ActionTypes.DEPARTMENTS_FETCH_ERROR,
  payload: err
});
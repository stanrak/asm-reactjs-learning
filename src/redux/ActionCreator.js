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

export const departmentsFetchSuccess = (departments) => ({
  type: ActionTypes.DEPARTMENTS_FETCH_SUCCESS,
  payload: departments
});

export const departmentsFetchError = (err) => ({
  type: ActionTypes.DEPARTMENTS_FETCH_ERROR,
  payload: err
});

export const staffsInDeptFetchLoading = () => ({
  type: ActionTypes.STAFFS_IN_DEPT_FETCH_LOADING
});

export const staffsInDeptFetchSuccess = (departments) => ({
  type: ActionTypes.STAFFS_IN_DEPT_FETCH_SUCCESS,
  payload: departments
});

export const staffsInDeptFetchError = (err) => ({
  type: ActionTypes.STAFFS_IN_DEPT_FETCH_ERROR,
  payload: err
});
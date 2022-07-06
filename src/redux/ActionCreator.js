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
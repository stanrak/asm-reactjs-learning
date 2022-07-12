import { baseUrl } from '../shared/baseUrl';
import { staffsFetchLoading, staffsFetchSuccess, staffsFetchError} from './ActionCreator';

// fetch from API
export const fetchStaffs = () => dispatch => {
  dispatch(staffsFetchLoading());

  fetch(baseUrl + 'staffs')
    .then(res => res.json())
    .then(res => {
      dispatch(staffsFetchSuccess(res.staffs));
      return res.staffs;
    })
    .catch(error => {
      dispatch(staffsFetchError(error));
    });
}
import { baseUrl } from '../shared/baseUrl';
import { staffsFetchLoading, staffsFetchSuccess, staffsFetchError} from './ActionCreator';

// fetch from API
export const fetchStaffs = () => dispatch => {
  dispatch(staffsFetchLoading(true));

  return fetch(baseUrl + 'staffs')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(staffsFetchSuccess(res.staffs));
      return res.staffs;
    })
    .catch(error => {
      dispatch(staffsFetchError(error));
    });
}
import { baseUrl } from '../shared/baseUrl';
import { staffsFetchLoading, staffsFetchSuccess, staffsFetchError } from './ActionCreator';
import { departmentsFetchLoading, departmentsFetchSuccess, departmentsFetchError } from './ActionCreator';
import { staffsInDeptFetchLoading, staffsInDeptFetchSuccess, staffsInDeptFetchError } from './ActionCreator';

// fetch Staffs from API
export const fetchStaffs = () => dispatch => {
  dispatch(staffsFetchLoading());

  fetch(baseUrl + 'staffs')
    .then(res => res.json())
    .then(res => {
      dispatch(staffsFetchSuccess(res));
      return res.staffs;
    })
    .catch(error => {
      dispatch(staffsFetchError(error));
    });
}

// fetch Department from API
export const fetchDepartments = () => dispatch => {
  dispatch(departmentsFetchLoading());

  fetch(baseUrl + 'departments')
    .then(res => res.json())
    .then(res => {
      dispatch(departmentsFetchSuccess(res));
      return res.departments;
    })
    .catch(error => {
      dispatch(departmentsFetchError(error));
    });
}

// fetch Staff in Department from API
export const fetchStaffsInDept = (id) => dispatch => {
  dispatch(staffsInDeptFetchLoading());

  fetch(baseUrl + 'departments/' + id)
    .then(res => res.json())
    .then(res => {
      dispatch(staffsInDeptFetchSuccess(res));
      return res.staffsInDept;
    })
    .catch(error => {
      dispatch(staffsInDeptFetchError(error));
    });
}
import React, { Component } from 'react';
import DepartmentItem from './DepartmentItemComponent';
import { connect } from 'react-redux';
import { fetchDepartments } from '../redux/fetch';
import LoadingSpinner from './LoadingSpinnerComponent';

const mapStateToProps = state => ({
  departments: state.departments
});

const mapDispatchToProps = dispatch => ({
  fetchDepartments: () => { dispatch(fetchDepartments()) }
});

class DepartmentList extends Component {
  componentDidMount() {
    const { fetchDepartments } = this.props;
    fetchDepartments();
  }

  render() {
    const { departments } = this.props;
    const department = departments.departments.map(d => { return <DepartmentItem key={d.id} department={d} /> });

    if (departments.isLoading === true) return <LoadingSpinner />

    return (
      <div className='container'>
        <div className='row m-3'>
          <h2>Danh sách Phòng ban</h2>
        </div>
        <div className="row m-3">
          {department}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import Payroll from './PayrollComponent';
import RenderStaff from './StaffComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDepartments, fetchStaffs } from '../redux/fetch';
import LoadingSpinner from './LoadingSpinnerComponent';

const mapStateToProps = state => ({
  departments: state.departments,
  //role: state.role,
  staffs: state.staffs
});

const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => { dispatch(fetchStaffs()) },
  fetchDepartments: () => { dispatch(fetchDepartments()) }
});

class Main extends Component {
  // add new staff data getting from StaffList to this staff list
  // addStaff(staff) {
  //   const id = Math.floor(Math.random() * 100000 + 1);
  //   const newStaff = { id, ...staff };
  //   this.setState({
  //     staffs: [...this.state.staffs, newStaff]
  //   });
  // }

  // fetch staffs and departments's data
  componentDidMount() {
    const { fetchStaffs, fetchDepartments } = this.props;
    fetchStaffs();
    fetchDepartments();
  }

  render() {
    const { departments, staffs } = this.props;
    console.log("render Main's staffs: ", this.props.staffs);
    console.log("render Main's departments: ", this.props.departments);

    const StaffWithId = ({match}) => {
      const id = match.params.staffId;
      const staff = staffs.staffs.find(s => s.id === parseInt(id, 10));
      console.log("staff voi id: ", staff.departmentId);
      const department = departments.departments.find(d => d.id === staff.departmentId);
      console.log("department voi id: ", department);
      return (
        <RenderStaff staff={staff} department={department} />
      );
    }
    
    if (staffs.isLoading === true) return <LoadingSpinner />
    if (departments.isLoading === true) return <LoadingSpinner />

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <StaffList staffs={staffs.staffs} />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route exact path="/departments" component={() => <DepartmentList departments={departments.departments} />} />
          <Route exact path="/payroll" component={() => <Payroll staffs={staffs.staffs} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
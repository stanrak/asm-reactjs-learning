import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import Payroll from './PayrollComponent';
import RenderStaff from './StaffComponent';
import RenderDepartment from './DepartmentComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDepartments, fetchStaffs, fetchStaffsInDept } from '../redux/fetch';
import LoadingSpinner from './LoadingSpinnerComponent';

const mapStateToProps = state => ({
  departments: state.departments,
  staffs: state.staffs,
  staffsInDept: state.staffsInDept
});

const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => { dispatch(fetchStaffs()) },
  fetchDepartments: () => { dispatch(fetchDepartments()) },
  fetchStaffsInDept: () => { dispatch(fetchStaffsInDept())}
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
    const { departments, staffs, staffsInDept } = this.props;

    const StaffWithId = ({match}) => {
      const id = match.params.staffId;
      const staff = staffs.staffs.find(s => s.id === parseInt(id, 10));
      const department = departments.departments.find(d => d.id === staff.departmentId);
      return (
        <RenderStaff staff={staff} department={department} />
      );
    }

    const DepartmentWithId = ({ match }) => {
      const id = match.params.departmentId;
      const { fetchStaffsInDept } = this.props;
      fetchStaffsInDept(id);
      console.log("staffs in dept la: ", staffsInDept);
      if (staffsInDept.isLoading === true) return <LoadingSpinner />
      const department = departments.departments.find(d => d.id === id);
      console.log("department la: ", department);
      return (
        <RenderDepartment staffsInDept={staffsInDept} department={department} />
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
          <Route path="/department/:departmentId" component={DepartmentWithId} />
          <Route exact path="/payroll" component={() => <Payroll staffs={staffs.staffs} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import Payroll from './PayrollComponent';
import RenderStaff from './StaffComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStaffs } from '../redux/fetchStaffs';

const mapStateToProps = state => ({
  departments: state.departments,
  //role: state.role,
  staffs: state.staffs
});

const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => { dispatch(fetchStaffs()) }
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
  componentDidMount() {
    const { fetchStaffs } = this.props;
    fetchStaffs();
  }

  render() {
    const { departments, staffs } = this.props;
    console.log("render Main's staffs: ", this.props.staffs);

    const StaffWithId = ({match}) => {
      const id = match.params.staffId;
      const staff = staffs.staffs.find(s => s.id === parseInt(id,10));
      return (
        <RenderStaff staff={staff}/>
      );
    }

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
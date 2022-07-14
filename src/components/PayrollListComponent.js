import React, { Component } from "react";

import { connect } from 'react-redux';
import { fetchSalaries } from '../redux/fetch';
import LoadingSpinner from './LoadingSpinnerComponent';
import PayrollItem from "./PayrollItemComponent";

const mapStateToProps = state => ({
  salaries: state.salaries
});

const mapDispatchToProps = dispatch => ({
  fetchSalaries: () => { dispatch(fetchSalaries()) }
});

class PayrollList extends Component {
  componentDidMount() {
    const { fetchSalaries } = this.props;
    fetchSalaries();
  }

  render() {
    const { salaries } = this.props;
    console.log("render salaries: ", salaries);

    if (salaries.isLoading === true) return <LoadingSpinner />

    const staffSalary = salaries.salaries.map(s => {
      return (<PayrollItem staff={s} key={s.id} /> );
    });

    return (
      <div className='container'>
        <div className='row m-3'>
          <h2>Bảng lương</h2>
        </div>
        <div className="row m-3">
          {staffSalary}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayrollList);
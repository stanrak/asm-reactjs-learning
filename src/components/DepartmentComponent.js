import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import StaffItem from './StaffItemComponent';

class RenderDepartment extends Component {
  constructor(props) {
    super(props);
    this.renderStaff = this.renderStaff.bind(this);
  }

  renderStaff() {
    const staffs = this.props.staffsInDept;
    console.log("staffs cua phong ban: ", staffs.length);
    
  }

  render() {
    const { staffsInDept, department } = this.props;
    let staff;

    if (staffsInDept.length === 0) {
      staff = <div><p>Phòng ban này hiện chưa có nhân viên</p></div>
    } else {
      staff = staffsInDept.map(s => { return <StaffItem staff={s} key={s.id} /> });
    }

    return (
      <div className="container-fluid">
        <div className='row m-3'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/staffs'>Nhân viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>{department.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='row m-3 justify-content-between'>
          <div className='d-flex align-items-center'>
            <h2 className='d-flex m-0'>Danh sách nhân viên</h2>
          </div>
        </div>
        <div className="row m-3"> 
          {staff}
        </div>
      </div>
    );
  }
}

export default RenderDepartment;
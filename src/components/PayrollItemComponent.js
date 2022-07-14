import React from "react";
import { Alert, Card, CardBody, CardText, CardTitle } from "reactstrap";
import dateFormat from 'dateformat';

const PayrollItem = ({ staff }) => {
  return (
    <div key={staff.id} className="col-12 col-md-6 col-lg-4 my-2">
      <Card>
        <CardBody>
          <CardTitle>{staff.name}</CardTitle>
          <CardText>Mã nhân viên: {staff.id}</CardText>
          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>Hệ số lương: {staff.salaryScale}</CardText>
          <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
          <Alert color="dark">Lương: {staff.salary}</Alert>
        </CardBody>
      </Card>
    </div>
  );
}

export default PayrollItem; 
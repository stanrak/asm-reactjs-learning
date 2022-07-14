import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const DepartmentItem = (props) => {
  let d = props.department;
  return (
    <Link key={d.id} to={`/departments/${d.id}`} className="col-12 col-md-6 col-lg-4 my-3">
      <Card>
        <CardBody>
          <CardTitle>{d.name}</CardTitle>
          <CardText>Số lượng nhân viên: {d.numberOfStaff}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
}


export default DepartmentItem;
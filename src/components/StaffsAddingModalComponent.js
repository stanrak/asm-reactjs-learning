import React, { Component } from 'react';
import {
  Button, Label, Modal, ModalHeader, ModalBody, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const defaultValue = {
  salaryScale: 1,
  annualLeave: 0,
  overTime: 0,
  salary: 3000000,
  image: '/assets/images/alberto.png'
}

const required = val => val;
const minLength = len => val => val && val.length >= len;

class StaffsAddingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      doB: "",
      startDate: ""
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    values.preventDefault();
    // for these unrequired fields, use default value
    let { salaryScale, annualLeave, overTime, salary, image } = defaultValue;
    if (values.salaryScale !== undefined) { salaryScale = values.salaryScale };
    if (values.annualLeave !== undefined) { annualLeave = values.annualLeave };
    if (values.overTime !== undefined) { overTime = values.overTime };
    if (values.salary !== undefined) { salary = values.salary };

    const newStaff = {
      name: values.name,
      doB: values.doB,
      salaryScale: salaryScale,
      startDate: values.startDate,
      department: {
        name: values.department
      },
      annualLeave: annualLeave,
      overTime: overTime,
      salary: salary,
      image: image
    };

    this.props.onAdd(newStaff);
  }

  render() {
    return (
      <div>
        <Button className='flex' onClick={this.toggleModal}>
          <i className="fa fa-plus fa-lg"> Thêm nhân viên</i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={staff => this.handleSubmit(staff)}>
              <Row className="form-group align-items-center">
                <Label htmlFor="name" md={4}>Tên nhân viên:</Label>
                <Col md={8}>
                  <Control.text model=".name" id="name" name="name"
                    placeholder="Tên nhân viên"
                    className="w-100"
                    validators={{required, minLength: minLength(3)}}
                  />
                  <Errors
                    className='text-danger'
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Cần nhập thông tin. ",
                      minLength: "Phải nhập nhiều hơn 2 ký tự. "
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="doB" md={4}>Ngày sinh:</Label>
                <Col md={8}>
                  <Control.input type="date" model=".doB" id="doB" name="doB"
                    value={this.state.doB}
                    className="w-100"
                    validators={{ required }}
                    onChange={e => this.setState({ doB: e.target.value })}
                  />
                  <Errors
                    className='text-danger'
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Cần nhập thông tin. "
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="salaryScale" md={4}>Hệ số lương:</Label>
                <Col md={8}>
                  <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                    placeholder="Hệ số lương"
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="startDate" md={4}>Ngày vào công ty:</Label>
                <Col md={8}>
                  <Control.input type="date" model=".startDate" id="startDate" name="startDate"
                    value={this.state.startDate}
                    className="w-100"
                    validators={{ required }}
                    onChange={e => this.setState({ startDate: e.target.value })}
                  />
                  <Errors
                    className='text-danger'
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Cần nhập thông tin. "
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="department" md={4}>Phòng ban:</Label>
                <Col md={8}>
                  <Control.text model=".department" id="department" name="department"
                    placeholder="Phòng ban"
                    className="w-100"
                    validators={{required}}
                  />
                  <Errors
                    className='text-danger'
                    model=".department"
                    show="touched"
                    messages={{
                      required: "Cần nhập thông tin. "
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại:</Label>
                <Col md={8}>
                  <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                    placeholder="Số ngày nghỉ còn lại"
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="overTime" md={4}>Số giờ đã làm thêm:</Label>
                <Col md={8}>
                  <Control.text model=".overTime" id="overTime" name="overTime"
                    placeholder="Số giờ đã làm thêm"
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row className="form-group align-items-center">
                <Label htmlFor="salary" md={4}>Mức lương:</Label>
                <Col md={8}>
                  <Control.text model=".salary" id="salary" name="salary"
                    placeholder="Mức lương"
                    className="w-100"
                  />
                </Col>
              </Row>
              <Row className="form-group justify-content-center">
                <Button color="secondary" type="submit">Thêm</Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StaffsAddingModal;
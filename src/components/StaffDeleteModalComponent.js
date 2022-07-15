import React, { Component } from 'react';
import {
  Button, Label, Modal, ModalHeader, ModalBody, Col, Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postStaff } from '../redux/fetch';
import { connect } from 'react-redux';

class StaffDeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <Button className='flex' onClick={this.toggleModal}>
          <i className="fa fa-plus fa-lg"> Xóa nhân viên</i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Xóa nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group align-items-center">
                <Label htmlFor="name" md={4}>Tên nhân viên:</Label>
                <Col md={8}>
                  <Control.checkbox model=".name" id="name" name="name" className="w-100" >
                    <option value="Dept01" selected>Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Control.checkbox>
                </Col>
              </Row>
              
              <Row className="form-group align-items-center">
                <Label htmlFor="department" md={4}>Phòng ban:</Label>
                <Col md={8}>
                  <Control.select model=".department" id="department" name="department" className="w-100" >
                    <option value="Dept01" selected>Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Control.select>
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
                <Button color="secondary" type="submit" onClick={this.toggleModal}>Thêm</Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
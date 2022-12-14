import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      name: '',
      email: '',
      id: ''
    }
  }
  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }
  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeStudentID(e) {
    this.setState({ id: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      id: this.state.id
    };

    // var local = 'http://localhost:4000/students/create-student'
    var glitch = 'https://best-luxuriant-salto.glitch.me/create-student'
    axios.post(glitch, studentObject)
      .then(respond => console.log(respond.data))
      .then(
        alert('Student created successfully!')
      );
    
      this.setState({ 
        name: '', 
        email: '', 
        id: '' 
    })
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>StudentID</Form.Label>
          <Form.Control type="text" value={this.state.id} onChange={this.onChangeStudentID} />
        </Form.Group>
        <Button variant="primary" size="lg" block="block" type="submit" className="mt-4">
          Create Student
        </Button>
      </Form>
    </div>
    );
  }
}
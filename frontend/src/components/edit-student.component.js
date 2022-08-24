import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      name: '',
      email: '',
      id: ''
    }
  }
  componentDidMount() {
    //var local = 'http://localhost:4000/students/edit-student/'
     var glitch = 'https://best-luxuriant-salto.glitch.me/edit-student'

    axios.get(glitch + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          id: res.data.id
        });
      })
      .catch((error) => {
        console.log(error);
      })
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

    //var local = 'http://localhost:4000/students/update-student/'
    var glitch = 'https://best-luxuriant-salto.glitch.me/update-student'
    axios.put(glitch + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        alert('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/student-list')
  }

  render() {
    return (<div className="form-wrapper">
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
          Update Student
        </Button>
      </Form>
    </div>);
  }
}
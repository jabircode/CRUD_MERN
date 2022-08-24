import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './studentTableRow';

export default class StudentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    // var local = 'http://localhost:4000/students/students'
     var glitch = 'https://best-luxuriant-salto.glitch.me/students'

    axios.get(glitch)
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>StudendID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
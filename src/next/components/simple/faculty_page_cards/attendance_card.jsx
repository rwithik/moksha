import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import config from '../../../config.json';
import './profile.css';
import DropdownButton from '../dropdown';
class FacultyAttendanceCard extends React.Component {

  constructor() {
    super();
    this.state = {
      attendance: [],
      course: '',
      courseList: []
    };
  }

  componentDidMount() {
    const usertoken = localStorage.getItem('usertoken');

    fetch(config.apiLocation + '/private/faculty/faculty_academic_enrolment_activity', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': usertoken
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        let { classes } = data;
        this.setState({
          courseList: classes
        });
      })
      .catch(err => console.error(err));

  }

  // getKeys() {
  //   return Object.keys(testData[0]);
  // }
  //
  getHeader() {
    return ['Course Code', 'Course Name', 'Faculty', 'Attendance'].map((key, index) => <th key={key}>{key}</th>)
  }

  // getRowsData = function(){
  //   var items = this.state.details;
  //   // var keys = this.getKeys();
  //   return items.map((row, index) => {
  //     return (
  //           <tr>
  //             <td>{row.official_course_id}</td>
  //             <td>{row.name}</td>
  //             <td>{row.first_name + ' ' + row.last_name}</td>
  //             <td>{(row.value*100/row.max_value).toFixed(2)}%</td>
  //           </tr>)
  //   })
  // }

  onchangeHandler = (e) => {
    const { value } = e.target;
    alert('Loading!');
    console.log(value);
  }

  render() {
    return (
      <div className="tab-container">
            <Row>
                <Col sm="12">
                    <h4>Attendance Class Details</h4>
                    <DropdownButton header="Courses" items={['TEST123']}/>
                    <Table>
                      <tbody>
                        <tr>
                        </tr>
                      </tbody>
                    </Table>
                </Col>
            </Row>
      </div>
    );
  }
}

export default FacultyAttendanceCard;

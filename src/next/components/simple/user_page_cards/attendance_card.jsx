import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import config from '../../../config.json';
import './profile.css';



class AttendanceCard extends React.Component {

  constructor() {
    super();
    this.state = {
      details: []
    };
  }

  componentDidMount() {
    const usertoken = localStorage.getItem('usertoken');
    let response = fetch(config.apiLocation + '/private/student/student_attendance_data/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': usertoken
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        let details = data.classes[0];
        this.setState({
          details
        });
      })
      .catch(err => {
        console.error("Error in AttendanceCard: " + err);
      })
      ;

  }

  getKeys() {
    return Object.keys(testData[0]);
  }

  getHeader() {
    return ['Course Code', 'Course Name', 'Faculty', 'Attendance'].map((key, index) => <th key={key}>{key}</th>)
  }

  // getRowData(row, i) {
  //   var keys = this.getKeys();
  //   return keys.map((key, index) => <td key={i}></td>)
  // }

  getRowsData = function(){
    var items = this.state.details;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
            <tr>
              <td>{row.official_course_id}</td>
              <td>{row.name}</td>
              <td>{row.first_name + ' ' + row.last_name}</td>
              <td>{(row.value*100/row.max_value).toFixed(2)}%</td>
            </tr>)
    })
  }


  render() {
    return (
      <div className="tab-container">
            <Row>
                <Col sm="12">
                    <h4>Attendance Details</h4>
                    <Table>
                      <tbody>
                        <tr>
                          {this.getHeader()};
                        </tr>
                        {this.getRowsData()}
                      </tbody>
                    </Table>
                </Col>
            </Row>
      </div>
    );
  }
}

const testData = [{
  'Course Code': 'CS203',
  'Course Name': 'ABCD',
  Faculty: 'Prof, ABC',
  Attendance: '70'
},
{
  'Course Code': 'CS201',
  'Course Name': 'BCDE',
  Faculty: 'Prof, ABC',
  Attendance: '75'
},
{
  'Course Code': 'CS200',
  'Course Name': 'DEFG',
  Faculty: 'Prof, ABC',
  Attendance: '100'
}]

export default AttendanceCard;

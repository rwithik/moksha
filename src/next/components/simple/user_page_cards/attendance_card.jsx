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
    console.log("constr: " + this.state)
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
        let { details } =  this.state;
        let { id, first_name, middle_name, last_name, gender, nationality, date_of_birth } = data.classes;
        details = {
          first_name,
          middle_name,
          last_name,
          date_of_birth,
          gender,
          nationality
        };
        // TODO: Change this, probably. ! important
        localStorage.setItem('userid', id);
        this.setState({
          details
        });
      })
      .catch(err => {
        console.error("Error in ProfileCard: " + err);
      })
      ;

  }

  getKeys() {
    return Object.keys(testData[0]);
  }

  getHeader() {
    var keys = this.getKeys();
    return keys.map((key, index) => <th key={key}>{key}</th>)
  }

  // getRowData(row, i) {
  //   var keys = this.getKeys();
  //   return keys.map((key, index) => <td key={i}></td>)
  // }

  getRowsData = function(){
    var items = testData;
    var keys = this.getKeys();
    return items.map((row, index)=>{
      return (
            <tr>
              <td>{row['Course Code']}</td>
              <td>{row['Course Name']}</td>
              <td>{row['Faculty']}</td>
              <td>{row['Attendance']}</td>
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

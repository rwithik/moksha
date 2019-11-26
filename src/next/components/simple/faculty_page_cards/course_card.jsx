import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import config from '../../../config.json';
import './profile.css';

class FacultyCourseInfoCard extends React.Component {

  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  componentDidMount() {

    const usertoken = localStorage.getItem('usertoken');

    fetch(config.apiLocation + '/private/student/student_class_enrollment_activity', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': usertoken
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        let courses = [
          {
            official_course_id: 'TEST123',
            name: 'Test Course 1',
            credits: 4
          },
          {
            official_course_id: 'TEST321',
            name: 'Test 2',
            credits: 4
          }
        ];
        this.setState({
          courses: courses
        })
      })
      .catch(err => console.log("Error in CourseCard: " + err));
  }

  makeTable() {
    const courses = this.state.courses;
    return courses.map(course => {
      return (
        <tr>
          <td>{course.official_course_id}</td>
          <td>{course.name}</td>
          <td>{course.credits}</td>
        </tr>
      )
    });
  }

  render() {



    return (
      <div className="tab-container">
            <Row>
                <Col sm="12">
                    <h4>Courses Currently Teaching</h4>
                    <Table>
                      <tbody>
                        <tr>
                          <th>Course Code</th>
                          <th>Course Name</th>
                          <th>Credits</th>
                        </tr>
                          {this.makeTable()}
                      </tbody>
                    </Table>
                </Col>
            </Row>
      </div>
    );
  }
}

export default FacultyCourseInfoCard;

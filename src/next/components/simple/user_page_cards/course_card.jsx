import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import config from '../../../config.json';
import './profile.css';

class CourseInfoCard extends React.Component {

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
        let course_ids = data.courses.map(course => course.course_id);
        this.setState({
          courses: course_ids
        })
      })
      .catch(err => console.log("Error in CourseCard: " + err));
  }

  makeTable() {
    const courses = this.state.courses;
    return courses.map(course => {
      return (
        <tr>
          <td>{course}</td>
          <td>Course Name</td>
          <td>Faculty</td>
        </tr>
      )
    });
  }

  render() {



    return (
      <div className="tab-container">
            <Row>
                <Col sm="12">
                    <h4>Courses Enrolled</h4>
                    <Table>
                      <tbody>
                        <tr>
                          <th>Course Code</th>
                          <th>Course Name</th>
                          <th>Faculty</th>
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

export default CourseInfoCard;

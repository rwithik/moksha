import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import { Container, Card } from 'reactstrap'

import config from '../../../config.json';

class AttendanceCard extends React.Component {
  constructor() {
    super();
    this.state = {
      attendance: {}
    };
  }

  componentDidMount() {
    const usertoken = localStorage.getItem('usertoken');
    const userid = localStorage.getItem('userid');
    fetch(config.apiLocation + '/private/student/student_attendance_data/' + userid)
      .then(response => response.json())
      .then(data => {
        console.log("Attendance: " + data);
        this.setState()
      });
  }

  render() {
    return (
      <Container>
        <Card>

        </Card>
      </Container>
    );
  }

}

export default AttendanceCard;

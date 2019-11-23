import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'reactstrap'

import config from '../../../config.json';

class ProfileCard extends React.Component {
  render() {

    let {first_name, middle_name, last_name, gender, nationality, date_of_birth} = this.props.details.classes;
    // console.log(`details: ${}`);

    return (
      <Container>
        <Card style={cardStyle}>
          Name: {first_name + middle_name + last_name}<br />
          Gender: {gender === 'M' ? 'Male' : 'Female'}<br />
          Nationality: {nationality}<br />
          Date of Birth: {date_of_birth}<br />
        </Card>
      </Container>
    );
  }
}

const cardStyle = {
  width: '70%',
  padding: '20px',
}

export default ProfileCard;

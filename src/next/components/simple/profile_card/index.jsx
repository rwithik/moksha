import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, FormFeedback, Label, Input, Card } from 'reactstrap'

import config from '../../../config.json';

class ProfileCard extends React.Component {
  render() {
    return (
      <Card style={{width: '50%'}}>
        First Name: {this.props.details.classes.first_name}
      </Card>
    );
  }
}

export default ProfileCard;

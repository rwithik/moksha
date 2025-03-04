import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import config from '../../../config.json';
import './profile.css';



class ProfileCard extends React.Component {

  constructor() {
    super();
    this.state = {
    details: {
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        nationality: '',
        date_of_birth: ''
      }
    };
  }

  componentDidMount() {
    const usertoken = localStorage.getItem('usertoken');
    let response = fetch(config.apiLocation + '/private/people/people/details', {
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


  render() {

    let {first_name, middle_name, last_name, gender, nationality, date_of_birth} = this.state.details;

    return (
      // <Container>
      //   {/* <Card style={cardStyle}>
      //     Name: {first_name + middle_name + last_name}<br />
      //     Gender: {gender === 'M' ? 'Male' : 'Female'}<br />
      //     Nationality: {nationality}<br />
      //     Date of Birth: {date_of_birth}<br />
      //   </Card> */}
      // </Container>
      <div className="tab-container">

            <Row>
              <Col sm="12">
                <h4>Basic Information</h4>
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row">Name:</th>
                      <td>{first_name + " "+ middle_name + " " + last_name}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gender:</th>
                      <td>{gender === 'M' ? 'Male' : 'Female'}</td>
                    </tr>
                    <tr>
                      <th scope="row">Nationality:</th>
                      <td>{nationality}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date of Birth:</th>
                      <td>{date_of_birth}</td>
                    </tr>
                  </tbody>
                </Table>
                <h4>Course Summary</h4>
              </Col>
            </Row>

      </div>
    );
  }
}


export default ProfileCard;

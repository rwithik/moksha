import React from 'react';
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import config from '../../../config.json';
import './profile.css';



class CourseInfoCard extends React.Component {

  render() {
    return (
      <div className="tab-container">
            <Row>
                <Col sm="12">
                    <h4>Attendace Details</h4>
                    <Table>
                      <tbody>
                        <tr>
                          <th>Course Code</th>
                          <th>Course Name</th>
                          <th>Faculty</th>
                        </tr>
                        <tr>
                          <td>{}</td>
                        </tr>
                        <tr>
                          <td>{}</td>
                        </tr>
                        <tr>
                          <td>{}</td>
                        </tr>
                        <tr>
                          <td>{}</td>
                        </tr>
                      </tbody>
                    </Table>
                </Col>
            </Row>
      </div>
    );
  }
}

export default CourseInfoCard;

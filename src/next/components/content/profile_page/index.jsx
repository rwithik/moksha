import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Table
} from 'reactstrap';

import config from '../../../config.json'

class ProfilePageContent extends React.Component {
  static async getInitialProps() {
    const usertoken = localStorage('usertoken');

    const data = await fetch(config.apiLocation + '')

    console.log(`The fucking token: ${usertoken}`)
  }

  render() {
    return (
      <div id="profile-page-content">
        <Card style={{width: '50vw', margin: 'auto auto'}}>
          <Table style={{margin: '5vh'}}>
          <thead>
            <tr>
            </tr>
          </thead>
          </Table>
        </Card>
      </div>
    )
  }
}

export default ProfilePageContent;

import React from 'react';
import fetch from 'isomorphic-unfetch';

import ProfilePageContent from '../../components/content/user_pages/profile';
import AttendanceContent from '../../components/content/user_pages/attendance';
import MainLayout from '../../components/derived/main_layout';
import config from '../../config.json';

class Profile extends React.Component {
  static async getInitialProps(ctx) {
    let data = {}
    let res;

    res = await fetch(config.apiLocation + '/public/information/entity_name/' +
    config.slug)
    data['collegeName'] = await res.json()

    res = await fetch(config.apiLocation + '/public/menu/' + config.slug + '/1')
    data['menu'] = await res.json()

    return {
      mainLayout: {
        topBar: {
          brandBar: {
            collegeName: data.collegeName.data.entity_name
          },
          menuBar: {
            menu: data.menu
          }
        }
      },
    }
  }

  render() {
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <ProfilePageContent />
      </MainLayout>
    )
  }
}

export default Profile;

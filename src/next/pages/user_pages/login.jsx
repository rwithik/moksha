import React from 'react';
import fetch from 'isomorphic-unfetch';

import LoginPageContent from '../../components/content/user_pages/login';
import MainLayout from '../../components/derived/main_layout';

import config from '../../config.json';

class LoginPage extends React.Component {
  static async getInitialProps() {
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
      }
    }
  }

  render() {
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <LoginPageContent />
      </MainLayout>
    )
  }
}

export default LoginPage;

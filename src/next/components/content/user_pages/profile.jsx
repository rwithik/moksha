import React from 'react';
import config from '../../../config.json';
import ProfileCard from '../../simple/user_page_cards/profile_card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import './profile-page.css';
import CourseInfoCard from '../../simple/user_page_cards/course_card';

class ProfilePageContent extends React.Component {
constructor() {
    super();
    this.state = {
      tabControl: {
        active: "1"
      }
    };
    console.log("constr: " + this.state)
  }

  changeTab(tab) {
    const {tabControl} = this.state;
    if (!(tab === tabControl.active)) {
      tabControl.active = tab;
    }
    this.setState({tabControl});
  }
  render(props) {
    return (
      // <div id="profile-page-content">
      <Card className="card-div">
      <Nav tabs>
          <NavItem>
            <NavLink
              className={this.state.tabControl.active === "1" ? "active": null}
              onClick={() => this.changeTab("1")}
              style={this.state.tabControl.active === "1" ? tabStyle: null}
            >
              Personal Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.tabControl.active === "2" ? "active": null}
              onClick={() => this.changeTab("2")}
              style={this.state.tabControl.active === "2" ? tabStyle: null}
            >
              Course Info
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.tabControl.active}>
          <TabPane tabId="1">
        <ProfileCard />
        </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.tabControl.active}>
          <TabPane tabId="2">
            <CourseInfoCard />
          </TabPane>
        </TabContent>
      {/* </div> */}
      </Card>
    )
  }

}
const tabStyle = {
  backgroundColor: '#45aaf2',
  color: '#fff'
}

export default ProfilePageContent;
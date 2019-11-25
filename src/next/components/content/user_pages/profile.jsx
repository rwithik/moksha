import React from 'react';
import config from '../../../config.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

import ProfileCard from '../../simple/user_page_cards/profile_card';
import CourseInfoCard from '../../simple/user_page_cards/course_card';
import AttendanceCard from '../../simple/user_page_cards/attendance_card';

import './profile-page.css';

class ProfilePageContent extends React.Component {
constructor() {
    super();
    this.state = {
      tabControl: {
        active: "2"
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
              style={this.state.tabControl.active === "1" ? tabStyleActive: tabStyleInactive}
            >
              Personal Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.tabControl.active === "2" ? "active": null}
              onClick={() => this.changeTab("2")}
              style={this.state.tabControl.active === "2" ? tabStyleActive: tabStyleInactive}
            >
              Course Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.tabControl.active === "3" ? "active": null}
              onClick={() => this.changeTab("3")}
              style={this.state.tabControl.active === "3" ? tabStyleActive: null}
            >
              Attendance
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
        <TabContent activeTab={this.state.tabControl.active}>
          <TabPane tabId="3">
            <AttendanceCard />
          </TabPane>
        </TabContent>
      {/* </div> */}
      </Card>
    )
  }

}
const tabStyleActive = {
  backgroundColor: '#45aaf2',
  color: '#fff'
}

const tabStyleInactive = {
  
}

const navItem = {
  // borderColor: '#000' 
  borderBottom: '100px'
}

export default ProfilePageContent;

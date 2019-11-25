import React from 'react';
import config from '../../../config.json';
import AttendanceCard from '../../simple/attendance_card';

class AttendanceContent extends React.Component {

  render(props) {
    return (
      <div id="profile-page-content">
        <AttendanceCard />
      </div>
    )
  }

}

export default AttendanceContent;

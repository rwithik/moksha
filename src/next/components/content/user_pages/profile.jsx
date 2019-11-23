import React from 'react';
import config from '../../../config.json';
import ProfileCard from '../../simple/profile_card';

class ProfilePageContent extends React.Component {

  render(props) {
    return (
      <div id="profile-page-content">
        <ProfileCard />
      </div>
    )
  }

}

export default ProfilePageContent;

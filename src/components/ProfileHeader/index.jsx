import PropTypes from 'prop-types';

import "./styles.css"

export const ProfileHeader = (props) => {

    const {username, profilePhoto, followers, following, description} = props;

    return(
        <div className="profile-header">
            <div className="profile-photo">
                <img className="photo" src={profilePhoto} alt={username + "profile photo"}></img>
            </div>
            <div className="header-content">
                <p className="profile-user"> {username.substring(0, username.indexOf("@"))} </p>
                <ul className="follower-info">
                    <p className="profile-followers"> <b>{followers} </b> Followers</p>
                    <p className="profile-following"> <b>{following}</b> Following</p>
                </ul>
                <p className="profile-description">{description}</p>
            </div>
        </div>
    );
}

ProfileHeader.propType = {
    username: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    description: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
}
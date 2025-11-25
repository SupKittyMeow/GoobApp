import "../App.css";
import UserProfileObject from "../types/UserProfileObject";

const ProfileTopBar = ({ profile }: { profile: UserProfileObject }) => {
  return (
    <div id="profileTopBar" className="profile-top-bar">
      <p className="{title-text}">GoobApp</p>
      <button
        className="profile-picture"
        style={{ backgroundImage: "url(" + profile.userProfilePicture + ")" }}
      ></button>
    </div>
  );
};

export default ProfileTopBar;

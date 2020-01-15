import React from "react";
import "./ProfileList.css";

function ProfileList(props) {
  return (
    <div className="profiles">
      {props.profiles && (
        <div>
          {props.profiles.map((profile, index) => {
            return (
              <div key={index} className="profile">
                <div className="profile__name">{profile.Name}</div>
                <div className="profile__email">{profile.Email}</div>
                <div className="profile__phone">{profile.Phone}</div>
                <div className="profile__company">{profile.Company}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProfileList;

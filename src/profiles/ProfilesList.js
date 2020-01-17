import React from "react";
import "./ProfileList.css";

function ProfileList(props) {
  return (
    <div className="profiles">
      {props.profiles && (
        <div>
          {props.profiles.map((profile, index) => {
            return (
              <div key={index}>
                {Object.keys(profile).map(key => {
                  return (
                    <div
                      key={key}
                      className={"profiles__item " + key}
                      style={{ width: 100 / Object.keys(profile).length + "%" }}
                    >
                      {profile[key]}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProfileList;
